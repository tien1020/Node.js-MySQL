var mysql = require("mysql");
require("console.table")
var inquirer = require("inquirer");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "tiennguyen",
    password: "HoaHong10",
    database: "bamazon"
});

connection.connect(function(error){
    if(error) throw error;

    console.log("id", connection.threadId);
    tabledisplay();
    
});

function tabledisplay(){
    var query = "SELECT item_id, product_name, department_name, price,stock_quantity FROM products ";
    connection.query(query, function(err, res){
        if(err) throw err;
        
            console.table(res);
                // "ID:", res[i].item_id, "Product:", res[i].product_name, "Price:", res[i].price);
         
          runSearch();
    });
}

function runSearch(){

}