var Connection = require('tedious').Connection;
var config = {
    server: 'localhost',
    authentication: {
        type: 'default',
        options: {
            userName: 'sa',
            password: 'Admin@123'
        }
    },
    options: {
        database: 'Company',
        encrypt: true,
        trustedConnection: true,
        trustServerCertificate: true,
        instanceName: 'SQLEXPRESS',
        rowCollectionOnDone: true,
        useColumnNames: false,
        "rowCollectionOnDone": true,
        "rowCollectionOnRequestCompletion": true
    }
}

console.log("on the connect code");
var connection = new Connection(config);

connection.on("connect",  function(error) {
    if (error) {
        console.log(error);
    } else {
        console.log('Connected');
        //executeStatement();
    }
})

connection.connect();



function executeStatement() {
    request = new Request(`select TOP 5 name from [dbo].[Tbl_Department];`, function(err) {
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
    connection.execSql(request);
}

module.exports = connection;
