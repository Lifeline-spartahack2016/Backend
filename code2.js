

sql.connect("mssql://lifeline:UIUC2019!@lifeline.database.windows.net/lifeline?encrypt=true").then(function() {
	// Query

	new sql.Request().query('INSERT INTO Emergency_Contact_Info ').then(function(recordset) {
		console.dir(recordset);
	})
	.catch(function(err) {
			console.log("catch 2\n" + err);

		// ... query error checks
	});

	// Stored Procedure

}).catch(function(err) {
	console.log("catch \n" + err);
	// ... connect error checks
});