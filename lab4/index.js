const sqlite3 = require('sqlite3');
var express = require("express")
var app = express()

//server port
var HTTP_Port = 3010

//start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port " + HTTP_PORT)
});


// Root endpoint
app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});

// Default response f
app.use(function(req, res){
    res.status(404);
});