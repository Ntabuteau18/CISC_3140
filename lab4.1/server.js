// Create express app
const sqlite3 = require('sqlite3');
const express = require("express");
var app = express();

// req.body
app.use(express.json())

// Server port
const HTTP_PORT = 7000
// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server is listening on port " + HTTP_PORT);
});

// Root endpoint
app.get("/", (req, res, next) => {
    res.json({"message":"Good"})
});

// Connecting a Database
const db = new sqlite3.Database('lab4.db', (error) => {
    if (error) {
        console.error("Database Inoperable " + error.message);
    } else {
        console.log('Connected to SQLite database')
    }
});

// -------GET REST API Request, HTTP Method Type: GET-------
// Display results of all cars present in the CSV file
// Display results of all cars information with queries
app.get("/api/carInfo", (req, res, next) => {
    var params = [req.query.carid, req.query.year, req.query.make, req.query.model]
    db.all("SELECT * FROM CarInfo WHERE Car_ID = COALESCE(?, Car_ID) AND Year = COALESCE(?, Year) AND Make = COALESCE(?, Make) AND Model = COALESCE(?, Model)", params, (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.status(200).json({ 
            message: "successful",
            data: rows  
        });
    });
});

// Display results of all the car owners contact information
// Display results of all car owners contact information with queries
app.get("/api/ownerInfo", (req, res, next) => {
    var params = [req.query.carid, req.query.name, req.query.email]
    db.all("SELECT * FROM OwnerInfo WHERE Car_ID = COALESCE(?, Car_ID) AND Name = COALESCE(?, Name) AND Email = COALESCE(?, Email)", params, (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.status(200).json({ 
            message: "success",
            data: rows 
        });
    });
});

// Display single car information record result of selected Car_ID from Car table
app.get("/api/carInfo/:id", (req, res, next) => {
    var params = [req.params.id]
    db.get("SELECT * FROM CarInfo WHERE Car_ID = ?", [req.params.id], (err, row) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.status(200).json({ 
            message: "successful",
            data: row
        });
    });
});


// Display single owner information record result of selected Car_ID from Car table
app.get("/api/ownerInfo/:id", (req, res, next) => {
    db.get("SELECT * FROM OwnerInfo WHERE Car_ID = ?", [req.params.id], (err, row) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.status(200).json({ 
            message: "success",
            data: row
        });
    });
});


// -------Create REST API Request, HTTP Method Type: POST-------
// Inserting new car data record(s)
app.post("/api/carInfo/", (req, res, next) => {
    var sql = `INSERT INTO CarInfo (Car_ID, Year, Make, Model) VALUES (?, ?, ?, ?)`
    var params = []
    let num = 0;
    var reqBody = req.body.bulk

    for(var i in reqBody) {
        var errors = []
        if(!reqBody[i].Car_ID && reqBody[i].Car_ID != 0) { errors.push("ERROR: Car ID"); }
        if(!reqBody[i].Year && reqBody[i].Year != 0) { errors.push("ERROR: Year"); }
        if(!reqBody[i].Make) { errors.push("ERROR: Make"); }
        if(!reqBody[i].Model) { errors.push("ERROR: Model"); }

        // indicate any errors
        if(errors.length) {
            res.status(400).json({"error": errors.join(",")});
            return;
        }
        num++;
        params.push(reqBody[i].Car_ID, reqBody[i].Year, reqBody[i].Make, reqBody[i].Model)
    }

    for(var i=0; i<num-1; i++) {
        sql += ", (?, ?, ?, ?)"
    }    
    
    db.run(sql, params, function(err, result) {
        if(err) {
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            message: "successful",
            data: params,
            id: this.lastID
        })
    });
});


// Inserting new owner data record(s)
app.post("/api/owner/", (req, res, next) => {
    var reqBody = req.body.bulk
    var sql = "INSERT INTO OwnerInfo (Car_ID, Name, Email) VALUES (?, ?, ?)"
    params = [];
    let num = 0;
    for(var i in reqBody) {
        var errors = []
        if(!reqBody[i].Car_ID && reqBody[i].Car_ID != 0) { errors.push("ERROR: Car ID"); }
        if(!reqBody[i].Name) { errors.push("ERROR: Name"); }
        if(!reqBody[i].Email) { errors.push("ERROR: Email"); }

        if(errors.length) {
            res.status(400).json({"error": errors.join(",")});
            return;
        }
        num++;
        params.push(reqBody[i].Car_ID, reqBody[i].Name, reqBody[i].Email)
    }
    for(var i=0; i<num-1; i++) {
        sql += ", (?, ?, ?)"
    }

    db.run(sql, params, function(err, result) {
        if(err) {
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
             message: "successful",
             data: params,
             id: this.lastID
        })
    });
});


// -------Update REST API Request, HTTP Method Type: PATCH-------
// Updating car data record
app.patch("/api/car/:id", (req, res, next) => {
    var reqBody = req.body;
    var params = [req.params.id];
    db.run("UPDATE CarInfo set Year = ?, Make = ?, Model = ?",
    [reqBody.Year, reqBody.Make, reqBody.Model, params],
        function (err, result) {
            if (err) {
                res.status(400).json({ "error": res.message });
                console.error()
                return;
            }
            res.status(200).json({ 
                message: "successful",
                updatedID: this.changes 
            });
    });
});

// Updating owner data record
app.patch("/api/owner/:id", (req, res, next) => {
    var reqBody = req.body;
    var params = [req.params.id];
    db.run("UPDATE OwnerInfo set Name = ?, Email = ? WHERE Car_ID = ?",
        [reqBody.Name, reqBody.Email, params],
        function (err, result) {
            if (err) {
                res.status(400).json({ "error": res.message });
                console.error()
                return;
            }
            res.status(200).json({ 
                message: "success",
                updated: this.changes
            });
    });
});

app.use(function(req, res){
    res.status(404);});