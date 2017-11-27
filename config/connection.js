var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

	connection = mysql.createConnection({
	port: 3306,
	host: "kavfu5f7pido12mr.cbetxkdyhwsb.us-east-1.rds.amazonaws.com" || "localhost",
	user: "gyrokgy9d2yj30xn" || "root",
	password: "owsxgc7bg1geb2p8" || "",
	database: "subl42syyvhlpzn2" || "burgers_db"
	});
};

connection.connect(function(err){
	if (err) {
		return console.error("error connecting: " + err.stack);
	}
	console.log("connected as id " + connection.threadId);
});

module.exports = connection;