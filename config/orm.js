//Require connection
const connection = require("../config/connection.js");

const orm = {
    //Select all
    all: function (whatToSelect, table, cb) {
        const queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [whatToSelect, table], function (err, result) {
            if (err) throw err;
            // console.table(result);
            cb(result);
        });
    },
    //Insert burger
    create: function (table, cols, vals, cb) {
        const queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, cols, vals], function (err, result) {
            if (err) throw err;
            // console.table(result);
            cb(result);
        });
    },

    //Update burger, move to right side
    update: function (table, objColVal, condition, cb) {
        const queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [table, objColVal, condition], function (err, result) {
            if (err) throw err;
            // console.table(result);
            cb(result);
        });
    }
}

//Export
module.exports = orm;