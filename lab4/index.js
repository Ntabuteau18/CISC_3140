const sqlite3 = require('sqlite3');
var express = require("express")
var app = express()

//server port
var HTTP_Port = 8000

//start server
app.listen(HTTP_Port, () => {
    console.log("Server running on port " + HTTP_Port)
});


// Root endpoint
app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});

const db = new sqlite3.Database(CarData.db, (err) => {
    if (err) {
        console.error("Error occured opening database " + err.message);
    } else {
        console.log('Connected to the database.')
    }
});


// Default response 
app.use(function(req, res){
    res.status(404);
});