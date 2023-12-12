const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const mysql = require("mysql2/promise");

const client = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

client
  .getConnection()
  .then((connection) => {
    console.log(`Database : ${DB_NAME}`);
    connection.release();
  })
  .catch((err) => console.error(`Error reaching database`));

module.exports = client;
