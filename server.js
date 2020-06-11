//Dependencies
var express = require("express");

var route = require("./controllers/burger_controller.js")

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"))