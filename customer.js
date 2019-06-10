var mysql = require("mysql");
var inquirer = require("inquirer");
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
});



function start(){
    connection.query("select * from products", function(err, data){
        if(!err);
           // res.json(data);
        console.table(data);

        inquirer.prompt([
            {
                name: "whatID",
                type: "input",
                message: "Please, type the ID of the product you want to buy",
                validate: function(value){
                    if(isNaN(value)===false){
                        return true;
                    }
                        return false;
                } 
            },
            {
                name: "howMany",
                type: "input",
                message: "How many items you would like to buy?",
                validate: function(value){
                    if(isNaN(value)=== false){
                        return true;
                    } return false;
                }
            }
        ])
        .then(function(answer){
            var idProduct = answer.whatID;
            var quantity = answer.howMany;

            //Check if the Items selected are available for that ID
            connection.query("SELECT * FROM products WHERE ?",{
                item_id: idProduct
            }, function (err, dataItem){
                //console.table(dataItem);
                //console.log(dataItem[0].stock);
                console.log("==== Checking if there's enough " + dataItem[0].product_name , "===");
                if(quantity <= dataItem[0].stock){
                    console.log("We have enough " + dataItem[0].product_name + " :)")
                    console.log("Stock: " + dataItem[0].stock + " | " + "You ordered: " + quantity + " items");

                    //This is the value which updates de DataBase
                    var newStock = dataItem[0].stock - quantity;
                    //console.log(newStock);
                    
                    //Showing the total cost of the purchase
                    console.log("Your total is: $ " + (dataItem[0].price * quantity));

                    //Updating the stock 
                    connection.query
                    ("UPDATE products SET ? WHERE ?",
                    [
                        {
                            stock: newStock,
                        },
                        {
                            item_id:idProduct
                        }
                    ],
                        function(error, res){
                            //console.log(res.affectedRows + " products updated!")
                            
                            console.log("=========================")

                            inquirer.prompt([
                                {
                                    name: "buyAgain",
                                    type:"confirm",
                                    message:"Would you like to buy something else?"
                                }
                            ]).then(function(res){
                                if(res.buyAgain === true) {
                                    start();
                                }else{
                                    console.log("=======");
                                    console.log("Thanks for visiting us");
                                    console.log("=======")
                                }
                            
                            })
                            
                        }); 

                    
                }else{
                    console.log("\nSorry, we don't have enough items available, please try again\n");
                    console.log("===============================================================\n");
                    start();
                }
            }
            )
        })
    });
};

start();


//----- Functions for later -----

function display(){
    connection.query("select * from products", function(err, data){
        if(!err);
           // res.json(data);
        console.table(data);
    });
}
