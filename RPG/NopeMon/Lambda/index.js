var mysql = require('mysql');
var config = require('./config/conn.json');

var pool  = mysql.createPool({
  host     : config.dbhost,
  user     : config.dbuser,
  password : config.dbpassword,
  database : config.dbname
});

exports.handler = (event, context, callback) => {
  pool.getConnection(function(err, connection) {    
    context.callbackWaitsForEmptyEventLoop = false;
    connection.query('SELECT * from Game', function (error, results, fields) {      
      connection.release();      
      if (error) throw error;
      else console.log(results);
       callback(null, results);
      process.exit();
    });
  });
}