var connection = require("./connection");
var inquirer = require('inquirer');
const { query } = require("express");
var orm = {
    selectAll : function(table) {
        let queryString = "SELECT * FROM " + table;
        connection.query(queryString, function(err, result) {
            if (err) {throw err};
            // declaring empty arrays for data to be pushed to
            let idArr = [];
            let data = JSON.parse(JSON.stringify(result));
            data.map(item => {idArr.push(item)});
            console.table(idArr)
        });
    },
    insertOne : function(table, column1, column2, value1, value2) {
        let queryString = "INSERT INTO "; queryString += table; queryString += "(";
        queryString += column1 + "," + column2; queryString += ") "; queryString += "VALUES (";
        queryString += JSON.stringify(value1) + "," + value2; queryString += ");";
        connection.query(queryString, function(err) {
            if (err) {throw err};
            console.log("successful INSERT into table");
        });
    },
    updateOne : function (table, id, burger_name, devoured, whereId) {
        let queryString = "UPDATE ";
        queryString += table;
        queryString += " SET id='" + id + "', burger_name='" + burger_name + "', devoured='" + devoured +"'";
        queryString += " WHERE id=";
        queryString += whereId + ";";
        console.log(queryString)
        connection.query(queryString, function(err, result) {
            if (err) {throw err};
            console.log("Successfully updated")
        })

    }
}
module.exports = orm;