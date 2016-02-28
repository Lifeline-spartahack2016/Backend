var express = require('express');
var app = express();

// var sql = require('mssql');

var bodyParser = require('body-parser');
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 


app.get('/', function (req, res) {
	res.send("osdfiuyguashbjknljdfiuydghjsbcnxklsajdfiudghj");
	res.end();
	console.log("get");
	console.log(req);
});

// create user + contact(s)
app.post('/', function(req, res){
	console.log("post");
	console.log(req.body)
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

	// sql.connect("mssql://lifeline:UIUC2019!@lifeline.database.windows.net/lifeline?encrypt=true").then(function() {
	// 	// Query

	// 	new sql.Request().query('INSERT INTO Emergency_Contact_Info(Name, Email, Password) values (name, email, password').then(function(recordset) {
	// 		console.dir(recordset);
	// 	})
	// 	.catch(function(err) {
	// 			console.log("catch 2\n" + err);

	// 		// ... query error checks
	// 	});

	// 	// Stored Procedure

	// }).catch(function(err) {
	// 	console.log("catch \n" + err);
	// 	// ... connect error checks
	// });





	// 	sql.connect("mssql://lifeline:UIUC2019!@lifeline.database.windows.net/lifeline?encrypt=true").then(function() {
	// 	// Query

	// 	new sql.Request().query('SELECT * FROM Emergency_Contact_Info ').then(function(recordset) {
	// 		console.dir(recordset);
	// 		res.send("HELLO<br/><br/>" + recordset);
	// 	})
	// 	.catch(function(err) {
	// 			console.log("catch 2\n" + err);

	// 		// ... query error checks
	// 	});

	// 	// Stored Procedure

	// }).catch(function(err) {
	// 	console.log("catch \n" + err);
	// 	// ... connect error checks
	// });