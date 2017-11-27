var connection = require("../config/connection.js");

var orm = {

	selectAll: function(callback) {
		var query = "SELECT * FROM burgers;";
		connection.query(query, function(error,result){
			if (error){
				throw error;
			}
			callback(result);
		});
	},

	insertOne: function(nameOfBurger,callback) {
		var newBurger = {burger_name: nameOfBurger};
		var query = "INSERT INTO burgers SET ?";

		connection.query(query, newBurger, function(error,result){
			if (error) {
				throw error;
			}
			callback(result);
		});
	},
	
	updateOne: function(idOfBurger,callback) {
		var query = "UPDATE burgers SET devoured = ? WHERE id = ?";
		connection.query(query, [1,idOfBurger], function(error,result){
			console.log("idOfBurger from updateONe inside ORM" + idOfBurger);
			if (error) {
				throw error;
			}
			callback(result);
		});
	}
}

module.exports = orm;

