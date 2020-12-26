var mysql = require('mysql');
var pool;
module.exports = {
    getPool: function () {
      if (pool) return pool;
      pool = mysql.createPool({
        host: 'localhost',
        user: 'youruser',
        password: 'yourpassword',
        database: 'gangwar'
    });
      return pool;
    }
};
