//Import orm.js
const orm = require("../config/orm.js");
//Call functions
orm.all("*", "burgers");

orm.create();

orm.update();

//Export
module.exports = "burger.js";