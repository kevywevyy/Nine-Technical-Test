const { application, query } = require('express');
const express = require('express');
const app = express();
const HOST = 'localhost';
const PORT = process.env.PORT || 8888;
var bodyParser = require('body-parser')
// create application/json parser
var jsonParser = bodyParser.json()

const all_articles = [
    {
        "id": "1",
        "title": "latest science shows that potato chips are better for you than sugar",
        "date" : "2016-09-22",
        "body" : "some text, potentially containing simple markup about how potato chips are great",
        "tags" : ["health", "fitness", "science"]
    }
]

const all_tags = {
    "2016-09-22" : {
        "tag" : "health",
        "count" : 17,
          "articles" :
            [
              "1",
              "7"
            ],
          "related_tags" :
            [
              "science",
              "fitness"
            ]
    }
}

app.get('/', (req, res) => {
    res.send("Welcome to api!")
})

app.post('/articles', jsonParser, (req, res) => {
    const article =     {
        "id": (all_articles.length + 1).toString(),
        "title": req.body.title,
        "date" : req.body.date,
        "body" : req.body.body,
        "tags" : req.body.tags
    }
    all_articles.push(article);
    res.send(article);
})

// print all articles
app.get('/articles', (req, res) => {
    res.status(200).json(all_articles) 
})

app.get('/articles/:id', (req, res) => {
    const article = all_articles.find(a => parseInt(a.id) === parseInt(req.params.id));
    if (!article) {
        res.status(404).send(`Error: article with {id: ${req.params.id}} does not exist`);
        return;
    }
    res.status(200).json(article)
})

app.get('/tags/:tagName/:date', jsonParser,  (req, res) => {
    const tagName = req.params.tagName;
    const queryDate = req.params.date;
    const date = convertQueryDateToString(queryDate);
    // check date doesnt exists in the all_tags obj
    if(!(date in all_tags)) {
        res.status(404).send(`Error: date with {date: ${date}} does not exist`);
        return;
    }
    // tagName doesnt exist in date
    if (!(tagName === all_tags[date]['tag'])) {
        res.status(404).send(`Error: tagName with {tagName: ${tagName}} does not exist on ${date}`);
        return;
    }
    res.status(200).json(all_tags[date]);
})

function convertQueryDateToString(queryDate) {
    // take the first 4 digits for year, next 2 digits for month and last 2 digits for date
    queryDate = queryDate.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3');
    return queryDate;
}

app.listen(PORT, () => {
        console.log(`Listening on ${HOST}:${PORT}...`)
        console.log(all_articles)
    }
);