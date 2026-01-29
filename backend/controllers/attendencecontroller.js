const db = require("../models/db");

exports.markAttendance = (req, res) => {
  const { student_id, class_id, status } = req.body;

  const query =
    "INSERT INTO attendance (student_id, class_id, date, status) VALUES (?, ?, CURDATE(), ?)";

  db.query(query, [student_id, class_id, status], (err) => {
    if (err) return res.status(500).send(err);
    res.send("Attendance marked successfully");
  });
};

exports.getAttendance = (req, res) => {
  const studentId = req.params.id;

  db.query(
    "SELECT * FROM attendance WHERE student_id=?",
    [studentId],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json(result);
    }
  );
};
