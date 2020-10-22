var express = require('express');
const orm = require('../config/orm');
var burger = require('../models/burger');
var router = express.Router();
// homepage
router.get('/', function (req,res) {
    res.redirect('/index')
});

// Creating routes and logic
router.get("/", function(req, res) {
    burger.all("burgers", function(data) {
        var object = {
            burgers : data
        }
        console.log(object)
        res.render("index", object)
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne(req.body.burger_name,function (result) {
        // might need to change result data here
        res.json(result)
    }); 
});

router.put("/api/burgers/:id", function (req,res) {
    console.log(req)
    burger.updateOne({devoured: req.body.devoured},
        "id =" + req.params.id, function(result) {
            if (result.changedRows == 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
});

module.exports = router;