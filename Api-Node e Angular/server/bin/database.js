var config = require("./configurations/config").database;
var sql = require('mssql');

module.exports = {
	'query': function(queryString) {
        if (queryString == undefined || queryString == "") {
            return null;
        } else {
            sql.close();
        	return new Promise((resolve, reject) => {
                console.log('Establishing connection to Database...')
                sql.connect(config).then(pool => {
                    console.log('Connected to Database!');
                    console.log(queryString);''
                    return pool.request().query(queryString);
                }).then(results => {
                    console.log('Query succeded!');
                    console.log('Closing connection...');
                    sql.close();
                    resolve(results);
                }).catch(error => {
                    console.log('Error executing query :(', error);
                    console.log('Closing connection...');
                    sql.close();
                    reject(error);
                });
            });
        }
    }
};