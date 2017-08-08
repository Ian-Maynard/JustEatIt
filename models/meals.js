// meals.js
//import the orm
var orm = require('../config/orm.js');

var entree = {
    selectAll: function(cb) {
        orm.selectAll('entree', function(res) {
            cb(res);
        });
    },

    insertOne: function(cols, vals, cb) {
        orm.insertOne('entree', cols, vals, function(res) {
            cb(res);
        });
    },

    updateOne: function(objColVals, condition, cb) {
        orm.updateOne('entree', objColVals, condition, function(res){
            cb(res);
        });
    }
};

module.exports = entree;