//Dependencies
const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

//Route
router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/burgers", function (req, res) {
    burger.create([
        "burger_name"
    ], [
        req.body.burger_name
    ], function (result) {
        console.log(result)
        res.json({result});
    });
});

router.put("/burgers/:id", function (req, res) {
    var id = "id = " + req.params.id;

    console.log("condition", 1);

    burger.update({
        devoured:1
    }, id, function (result) {
        console.log(result)
        res.status(200).end();
    });
});

// router.delete("/api/burger/:id", function (req, res) {
//     var condition = "id = " = req.params.id;

//     burger.delete(condition, function (result) {
//         if (result.affectedRows == 0) {
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });
// });

//Export Route
module.exports = router;