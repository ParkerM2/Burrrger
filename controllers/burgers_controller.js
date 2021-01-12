const express = require('express');
const orm = require('../config/orm');
const burger = require('../models/burger');
const router = express.Router();
// homepage
router.get("/", function (req, res) {
    console.log("run the '/'")
    res.redirect("/burgers")
});

// Creating routes and logic
router.get("/burgers", function(req, res) {
    burger.all("burgers", function(data) {
        console.log("this is the object", object)
        res.render("index", {burger_data: data})
    });
});

router.post("/burgers/create", function(req, res) {
    burger.create(req.body.burger_name,function (result) {
        // might need to change result data here
        console.log(result)
        res.redirect("/")
        res.json(result)
    }); 
});

router.put("/burgers/:id", function (req, res) {
    console.log(req)
    burger.update(req.params.id, function (result) {
        console.log(result)
        res.sendStatus(200);
    }
        
    )
});

module.exports = router;