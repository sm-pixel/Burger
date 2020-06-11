//Import orm.js
const orm = require("../config/orm.js");
//Call functions
var burger = {
    all: function(cb) {
        orm.all("burgers", function(results) {
            cb(results);
        });
    },
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(results){
            cb(results);
        });
    },
    update: function(objColVals, condition, cb){
        orm.update("burgers", objColVals, condition, function(results){
            cb(results);
        });
    }
};
//Export
module.exports = burger