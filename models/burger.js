var orm = require("../config/orm.js");

var burger = {
	selectAll: function(callback) {
		orm.selectAll(function(res){
			callback(res);
		});
	},

	insertOne: function(nameOfBurger,callback){
		orm.insertOne(nameOfBurger,function(res){
			callback(res);
		}); // takes nameOfBurger
	},
	updateOne: function(idOfBurger,callback){
		orm.updateOne(idOfBurger,function(res){
			callback(res);
		});
	}
}


module.exports = burger;
