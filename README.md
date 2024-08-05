# ExprestAPI

Web Dev Simplified Rest API Tutorial Project using Express, Node, and MongoDB


### Project Setup

Create Directory
```shell
touch /RestAPI
```

Switch to /RestAPI directory
```shell
cd /RestAPI
```

Initialize Node Package Manager
```shell
npm init
```
NPM will ask a series of questions about the package setup. For default answers, press enter for each response.

### install Express and Mongoose dependencies
```shell
npm i express mongoose
```
install dotenv and nodemon as development dependencies
dotenv allows us to pull environment variables from a .env file. 
nodemon allows us to refresh our server whenever we make a change without requiring a mandatory restart. 
```shell
npm i --save-dev dotenv nodemon
```
open `package.json`
in `scripts`
replace 
```json
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1"
}
```

with :
```json
"devStart": "nodemon server.js"
```
It should look like this
```json
"scripts": {
"devStart": "nodemon server.js"
},
```


