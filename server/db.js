const { Pool } = require('pg');
const PG_URI = 'postgres://uriopwhg:OCX1frU-A_ry4hyeec1kgxLnOpJAcKnj@castor.db.elephantsql.com/uriopwhg'

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};
