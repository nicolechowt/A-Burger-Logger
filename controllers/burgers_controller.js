var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");


router.get("/", function(req,res){
	burger.selectAll(function(data){
		var allBurgerObj = {
			burgers: data
		};
	console.log(allBurgerObj);
	res.render("index", allBurgerObj);
	});
});

router.post("/api/burgers", function(req,res){
	burger.insertOne([req.body.burger_name], function(result){
		res.json({ id: result.insertId });
	});
});

router.put("/api/burgers/:id", function(req,res){
	var id = req.params.id;
	console.log("request body id inside router " + id);
	burger.updateOne(id, function (result){
		if (result.changedRows == 0) {
      	// If no rows were changed, then the ID must not exist, so 404
      	return res.status(404).end();
    	} else {
      	res.status(200).end();
    	}
  });
});

module.exports = router;