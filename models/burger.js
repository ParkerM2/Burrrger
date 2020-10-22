var orm = require('../config/orm');
var connection = require('../config/connection');
var server = require('../server');

var burger = {
    all: function(table, cb) {
        orm.selectAll("burgers", function (res) {
            cb(res)
        });
    },
    insertOne: function(table, col1, col2, val1, val2, cb) {
        table = "burgers";
        col1 = "burger_name";
        col2 = "devoured";
        orm.insertOne(table, col1, col2, val1, val2, function (result) {
            cb(result)
        });
    },
    updateOne: function(table, id, col1, col2, whereId, cb) {
        table = "burgers";
        col1 = "burger_name";
        col2 = "devoured"
        orm.updateOne(table, id, col1, col2, whereId, function (result) {
            cb(result)
        });
    }
};

module.exports = burger;