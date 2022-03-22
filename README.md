# Nine-Technical-Test

### Dependencies
#### npm
Project is created using Node.js and npm to run the project and install the dependencies
Installation guide: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

### Running the Project
The version of nodejs is v16.14.0.
The version of npm is 8.3.1.
1. Once the node version is installed, run `npm install` to install the packages necessary to run the project
2. After the packages are installed, run `npm start` to start the server on localhost port 8888 which you can access at `localhost:8888`

### Dependencies
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
1. In the root project directory, run `npm install` and `npm start` to start the server, listening on localhost:8888.