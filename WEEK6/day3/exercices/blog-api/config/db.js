const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',       
    password: '1948',  
    database: 'blog'
  }
});

module.exports = db;