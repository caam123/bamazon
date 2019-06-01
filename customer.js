var mysql = require("mysql");
// var inquire = require("inquirer");

//Connection

var connection = mysql.createConnection({
    host: "localhost",
    por: 3306,
    user: "root",
    password: "Carl_051",
    database: "bamazondb"
});


connection.connect(function(err){
    if(err) throw err;
    console.log("Conecction: Succesful!")
    console.log(bamazondb)
});