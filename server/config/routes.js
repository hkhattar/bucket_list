var bodyParser = require("body-parser");
var users = require('./../controllers/users.js');

  
module.exports = function(app) {
	app.use(bodyParser.json());

	// app.post('/user', function(req, res){
	// 	users.create(req, res);
	// });

	app.post('/createuser', function(req,res){
		users.create(req,res)
	})
	
	app.get('/users', users.index);

	app.post('/new_item', function(req,res){
		users.createItem(req,res)
	})
};