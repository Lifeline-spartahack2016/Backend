var Connection = require('tedious').Connection;
var config = {
    userName: 'lifeline',
    password: 'Uiuc2019',
    server: 'lifeline.database.windows.net',
    // If you are on Microsoft Azure, you need this:
    options: {encrypt: true, database: 'AdventureWorks'}
};
var connection = new Connection(config);
connection.on('connect', function(err) {
// If no error, then good to proceed.
    console.log("Connected");
    CreateNewUser();
});

// Step3
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;

function CreateNewUser() {
    request = new Request("INSERT INTO User_Info (Name, Email, Password\n VALUES(name, email, password)", function(err) {
    if (err) {
        console.log(err);}
    });
    var result = "";
    request.on('row', function(columns) {
        columns.forEach(function(column) {
          if (column.value === null) {
            console.log('NULL');
          } else {
            result+= column.value + " ";
          }
        });
        console.log(result);
        result ="";
    });

    request.on('done', function(rowCount, more) {
    console.log(rowCount + ' rows returned');
    });
    connection.execSql(request);
}
