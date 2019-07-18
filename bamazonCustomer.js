var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "tiennguyen",
    password: "HoaHong10",
    database: "bamazon.products"
})

connection.connect(function(error){
    if(error) throw error;

    console.log("id", connection.threadId);
    tabledisplay();
    
})

function tabledisplay(){
    var query = "SELECT item_id, product_name, price FROM products GROUP BY stock_quantity HAVING count(*) > 1?";
    connection.query(query, function(err, res){
        if(err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log("ID:", res[i].item_id, "Product:", res[i].product_name, "Price:", res[i].price);
          }
    });
};