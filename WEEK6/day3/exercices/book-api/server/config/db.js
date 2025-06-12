const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",            
  host: "localhost",
  database: "bookdb",          
  password: "1948", 
  port: 5432,
});

module.exports = pool;