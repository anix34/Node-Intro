const { Client } = require('pg');

let DB_URI;
if (process.env.NODE_ENV === "test") {
  DB_URI = "biztime_test"
} else {
  DB_URI = "biztime"
}

// These are default credentials that should be replaced 
const db = new Client({
  user: 'N',
  host: 'localhost',
  password: 'abc123',
  database: DB_URI,
  port: 5432, 
});

// Connect to the database
db.connect()
  .then(() => console.log('Connected to PostgreSQL database'))
  .catch(err => console.error('Error connecting to PostgreSQL database', err));

module.exports = db