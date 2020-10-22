var orm = require('../config/orm');
var connection = require('../config/connection');
var server = require('../server');

var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function (res) {
            cb(res)
        });
    },
    insertOne: function(val1) {
        table = "burgers";
        col1 = "burger_name";
        col2 = "devoured";
        val2 = "false";
        orm.insertOne(table, col1, col2, val1, val2, function (result) {
            cb(res)
        });
    },
    updateOne: function(whereId) {
        table = "burgers";
        col1 = "burger_name";
        col2 = "devoured"
        orm.updateOne(table, id, col1, col2, whereId, function (result) {
            cb(res)
        });
    }
};

module.exports = burger;