var mysql = require("mysql");
var Table = require("cli-table");
// var inquire = require("inquirer");

//Connection

var connection = mysql.createConnection({
    host: "localhost",
    por: 3306,
    user: "root",
    password: "Carl_051",
    database: "bamazondb"
});

var table = new Table({
});

connection.connect(function(err){
    if(err) throw err;
    console.log("Conecction: Succesful!")
    displayData();
});

function displayData(){
    connection.query("select * from products", function(err, data){
        if(!err);
            res.json(data);
            
            console.log(data)

        
        //console.log(table.toString());

    });
}

// I use npm cli-table
// I'm trying to display the data in a comprehensible format
// cli-table works but i'm having trouble with row data packet,i cannot acces each object information
//i've seen a solution with rows and res.json but i havent figured out how to implement those correctly. 

