//Import orm.js
const orm = require("../config/orm.js");
//Call functions
var burger = {
    all: function(cb) {
        orm.all("cats", function(results) {
            cb(results);
        });
    },
    create: function(cols, vals, cb) {
        orm.create("burger", cols, vals, function(results){
            cb(results);
        });
    },
    update: function(objColVals, condition, cb){
        orm.update("burger", objColVals, condition, function(results){
            cb(results);
        });
    }
};
//Export
module.exports = burger