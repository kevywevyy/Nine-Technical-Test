# Nine-Technical-Test

### Dependencies
#### npm
Project is created using Node.js and npm to run the project and install the dependencies
Installation guide: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
#### Express
The primary use of Express is to provide server-side logic for web and mobile applications. 
Express is a web application framework for Node. js that allows you to spin up robust APIs and web servers in a much easier and cleaner way. It is a lightweight package that does not obscure the core Node.
To install run:
`npm install express --save`
#### Nodemon
Nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
If you install nodemon as a Dev dependency, then it will not be locally installed, it'll not be available in your system path. But if you install nodemon globally then it'll be installed on your system path globally.

To install nodemon globally:

`npm install -g nodemon`
To install nodemon as a dev dependecy:

`npm install --save-dev nodemon`
#### BodyParser
Body-parser is the Node. js body parsing middleware. It is responsible for parsing the incoming request bodies in a middleware before you handle it.
Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
To install run:
`npm i body-parser`

### Running the Project
The version of nodejs is v16.14.0.
The version of npm is 8.3.1.
1. Once the node version is installed, in the root project directory run `npm install` to install the packages necessary to run the project
2. After the packages are installed, run `npm start` to start the server on localhost port 8888 which you can access at `localhost:8888`


# Nine Technical Test Report
###### This could be anything from why you chose the language and or libraries, why you structured the project the way that you did, why you chose a particular error handling strategy, how you approached testing etc.

The reason for the language (Javascript) and libraries (Express, Nodemon, BodyParser) I chose for developing the api service is just due to my personal comfort in developing in javascript as well. The reasons for using Express, Nodemon and BodyParser are explains in the setup of the project where I explained the use of each dependencies. 
If there were more dummy data, I would've personally separated the variables all_tags and all_articles into a different file path under the folder name 'data' and imported them in separatedly, but since there was so less data, I decided to just keep them inside index.js.
I structured the all articles into an array, in the format of [{article 1}, {article 2}, {article 3} ...] as this was the easiest and conventional method of storing all the articles as well as obtaining the actual output of the article depending on the specified id. 
However, for the all_tags, I structured a little differently, where it is structured in the format of 
`
    {
        date: {
            tag: value
            ...
            ...
        }
    }
`
as I felt like I could use the params of date to access the specific object the associated tag.