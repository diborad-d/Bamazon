var inquirer = require("inquirer");
var express = require("express");
var mysql = require("mysql");
var app = express();
//connection
var con = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "bamazon"
});
//routes
// db.connect();

// app.get("/products", (req, res) => {

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected");
  con.query("SELECT * FROM products", function(err,res){
    if (err) throw error;
    start();
  });
  var start = function() {
    inquirer
      .prompt(
        {
          name: "id",
          type: "list",
          message: "what is the product ID would like to buy?",
          choices: ["1", "2", "3", "4", "5", "6"]
        },
        {
          name: "quantity",
          type: "input",
          message: "how many units of the product they would like to buy?"
        }
      )
      .then(function(answer) {
        //if (answer.idOrname == num) {
        //}

        //       var query = "SELECT product_name FROM bamazon_DB WHERE?";
        //       connection.query(query, { product_name: answer.product_name }, function(err, res) {
        //         if (err) throw err;
        //         for (var i = 0; i < res.length; i++) {
        //           console.log("product name:" + res[i].product_name + "|| dept: " + res[i].dept_name);
        //         }
        //         runSearch();
        //       });
        //     });
        // }
       
        con.query("SELECT * FROM products WHERE item_id= ?", [answer.id], function(err, result) {
          if (err) throw error;
          console.log(result);
        });
      });
    };
 });
// app.listen(3000, () => console.log("Connected!"));
