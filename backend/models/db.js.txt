const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "mysql",
  user: "root",
  password: "root",
  database: "attendance_db"
});

db.connect((err) => {
  if (err) {
    console.log("DB connection failed", err);
  } else {
    console.log("Connected to MySQL");
  }
});

module.exports = db;
