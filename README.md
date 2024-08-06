# ExprestAPI Project

This project, ExprestAPI, leverages Express, Node.js, and MongoDB to create a REST API. Express is a widely used web application framework for Node.js. MongoDB is a document-oriented database utilized as the main database for our API.

## Setup Instructions

To successfully set up this project, follow the instructions below:

### 1. Create Project Directory

Create a new directory named 'RestAPI' using your command-line interface and navigate into it:

2. Initialize NPM
```shell
npm init
```
This command prompts for various parameters like the name, version, and entry point of your application. Hit RETURN to accept the default values.

3. Install Dependencies
   This project employs several packages including express, mongoose, dotenv, and nodemon. Install these with the following command:
```shell
npm install express mongoose
npm install --save-dev dotenv nodemon
```

4. Setup Scripts
   Next, you establish a start script for the application in the package.json file. Under the scripts field, remove the existing test script and add a devStart script:
```json
"scripts": {
  "devStart": "nodemon server.js"
}
```
This script utilizes nodemon to initiate the server and auto-restarts when changes are detected.
With these instructions, you should have a properly configured environment for developing REST APIs with Express, Node.js, and MongoDB.
