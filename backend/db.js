const Pool = require('pg').Pool
const pool = new Pool({
  user: 'hunter',
  password: 'root',
  host: 'localhost',
  port: 5432,
  database: 'hunter'
})

module.exports = pool