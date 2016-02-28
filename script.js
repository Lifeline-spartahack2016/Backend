var express = require('express');
var app = express();

// var sql = require('mssql');

// var bodyParser = require('body-parser');
// app.use(bodyParser.json());       // to support JSON-encoded bodies
// app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  // extended: true
// })); 


app.get('/', function (req, res) {
	res.send("osdfiuyguashbjknljdfiuydghjsbcnxklsajdfiudghj");
	res.end();
});

// create user + contact(s)
app.post('/', function(req, res){
	// res.sendStatus(200);
	// var data = req.body;
	console.log("CREATE USER");
	// res.send("fasbhdjnlk");
	// var name = req.body.name;
	// var email = req.body.email;
	// var password = req.body.password;
	console.log("-----------REQ:\n"+req.body);

	console.log("-----------");
	res.end();


});

app.post('/api/createEmergencyContact', function(req, res){
	var data = req.body;
	var name = req.body.name;
	var phoneNum = req.body.phoneNum;
	var profileID = req.body.profileID;
});

app.post('/api/modifyContactInfo', function(req, res){
	var data = req.body;
	var contactID = req.body.contactID;
	var name = req.body.name;
	var phoneNum = req.body.phoneNum;
	var profileID = req.body.profileID;
});

app.post('/api/deleteContact', function(req, res){
	var data = req.body;
	var contactID = req.body.contactID;
});

app.post('/api/getContacts', function(req, res){
	var data = req.body;
	var profileID = req.body.profileID;
});



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});