var inquirer = require("inquirer");
var express = require("express");
var mysql = require("mysql");
const app = express();
//connection
const connection = mysql.createConnection({
  host: "localhost",
  port: 3000,
  user: "root",
  password: "",
  database: "bamazon_DB"
});
//routes
connection.connect();

app.get("/products", (req, res) => {
  const sql = "SELECT * FROM products";

  connection.connect(sql, (err, result) => {
    if (err) throw err;
    console.log("there's an error retreiving data");
    runSearch();
    res.send(result);
  });
});

function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "what are you shopping for?",
      choices: ["Find products by product_name", "Find products by dept", "Find products by price", "Search for a specific product"]
    })
    .then(function(answer) {
      switch (answer.action) {
        case "Find products by product_name":
          productSearch();
          break;
        default:
          "please choose from options provided";
          break;
      }
    });
}
// db.query("SELECT * FROM products", function(err, rows, fields) {
//   if (err) throw err;
//   res.send(result);
// });
function productSearch() {
  inquirer
    .prompt({
      name: "product_name",
      type: "input",
      message: "what product would you like to search for?"
    })
    .then(function(answer) {
      var query = "SELECT product_name FROM bamazon_DB WHERE?";
      connection.query(query, { product_name: answer.product_name }, function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
          console.log("product name:" + res[i].product_name + "|| dept: " + res[i].dept);
        }
        runSearch();
      });
    });
}

app.listen(3000, () => console.log("Server is running"));
