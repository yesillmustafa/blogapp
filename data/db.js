const mysql = require("mysql2");
const { connect } = require("../routes/user");
const config = require("../config");

let connection = mysql.createConnection(config.db);

connection.connect(function(err) {
    if(err){
        return console.log(err);
    }

    console.log("MySQL server baglantisi yapildi.");
})

module.exports = connection.promise()