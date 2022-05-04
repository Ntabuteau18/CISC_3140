var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = CarData.db
const db = require("./database.js")

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      console.error(err.message) ;throw err;
    }
    else {
        console.log("Connected to the database")
    }
})
module.exports = db