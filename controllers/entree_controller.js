var entree = require('../models/entree.js'); // Model
var express = require('express'); //Express
var router = express.Router();

// GET - selectAll
router.get('/', function (req, res) {
	res.redirect('/entrees');
});

router.get('/entrees', function (req, res) {
	entree.selectAll(function (data) {
		var entreeObj = {entrees: data };
		console.log(entreeObj);
		res.render('index', entreeObj);
	});
});


// POST - insertOne
router.post('/entrees/create', function (req, res) {
	entree.insertOne(['entree_name'], [req.body.name], function () {
		res.redirect('/entrees');
	});
});

// PUT - updateOne
router.put('/entrees/update/:id', function (req, res) {
	var record = 'id = ' + req.params.id;
	console.log('record: ', record);
		entree.updateOne({devoured: req.body.devoured}, record, function () {
			res.redirect('/entrees');
	});
});

// DELETE - deleteOne
router.delete('/entrees/delete/:id', function (req, res) {
	var record = 'id = ' + req.params.id;

	entree.deleteOne(record, function () {
		res.redirect('/entrees');
	});
});

// Export router
module.exports = router;