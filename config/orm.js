var connection = require("./connection");
var orm = {
    selectAll : function(table) {
        // creating the query string 
        let queryString = "SELECT * FROM " + table;
        //querying the mysql connection and calling a function to console.log the response
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
        let queryString = "INSERT INTO ";
        queryString += table; 
        queryString += "(";
        queryString += column1 + "," + column2; 
        queryString += ") "; 
        queryString += "VALUES (";
        queryString += value1 + "," + value2; 
        queryString += ");";

        connection.query(queryString, function(err) {
            if (err) {throw err};
            console.log("successfully INSERTED into ", table);
        });
    },
    updateOne : function (table, id, burger_name, devoured, whereId) {
        let queryString = "UPDATE ";
        queryString += table;
        queryString += " SET id='" + id + "', burger_name='" + burger_name + "', devoured='" + devoured +"'";
        queryString += " WHERE id=";
        queryString += whereId + ";";
        connection.query(queryString, function(err, result) {
            if (err) {throw err};
            console.log("Successfully updated table :", table, "with :", burger_name, devoured, "... AT id : ", whereId)
        });
    }
}
module.exports = orm;