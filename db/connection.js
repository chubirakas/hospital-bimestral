var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"hospital"
});
connection.connect();

module.exports = connection;