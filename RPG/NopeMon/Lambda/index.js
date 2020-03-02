var mysql = require('mysql');
var config = require('./config/conn.json');

var pool  = mysql.createPool({
  host     : process.env.dbhost,
  user     : process.env.dbuser,
  password : process.env.dbpassword,
  database : process.env.dbname
});

exports.handler = (event, context, callback) => {
  pool.getConnection(function(err, connection) {
    if (err) callback('Unable to connect to database');
    context.callbackWaitsForEmptyEventLoop = false;
    
    connection.query('SELECT * from Game', function (error, results, fields) {    
      connection.release();
      console.log(results);
      
      callback(null, {
        statusCode: responseCode,
        headers: {
          "x-custom-header" : "my custom header value"
        },
        body: JSON.stringify(results)
      });

      callback(null, results);
    });        
  });
};