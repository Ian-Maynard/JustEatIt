// ORM 

var orm = require('../config/orm.js');
var entree = {
	selectAll: function (cb) {
		orm.selectAll('entrees', function (res) {
			cb(res);
		});
	},
	// Note -  cols and vals are arrays
	insertOne: function (cols, vals, cb) {
		orm.insertOne('entrees', cols, vals, function (res) {
			cb(res);
		});
	},
	updateOne: function (objColVals, record, cb) {
		orm.updateOne('entrees', objColVals, record, function (res) {
			cb(res);
		});
	},
	deleteOne: function (record, cb) {
		orm.deleteOne('entrees', record, function (res) {
			cb(res);
		});
	}
};

module.exports = entree;