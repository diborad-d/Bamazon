var inquirer = require("inquirer");
var express = require("express");
var mysql = require("mysql");
var app = express();

var con = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "bamazon"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected");
  con.query("SELECT * FROM products", function(err, res) {
    if (err) throw error;
    start();
  });
  var start = function() {
    inquirer
      .prompt(
        {
          type: "list",
          name: "choice",
          message: "what is the product ID would like to buy?",
          choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Q"],
          validate: function(val) {
            return !isNaN(val) || val.toLowerCase() === "q";
          }
        },
        {
          name: "quantity",
          type: "input",
          message: "how many units of the product they would like to buy?"
        }
      )
      .then(function(answer) {
        //
        con.query("SELECT * FROM products WHERE item_id= ?", [answer.id], function(err, result) {
          if (err) throw error;
          console.log(result);
        });
      });
  };
});
