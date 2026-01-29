CREATE DATABASE attendance_db;
USE attendance_db;

CREATE TABLE attendance (
  id INT AUTO_INCREMENT PRIMARY KEY,
  student_id INT,
  class_id INT,
  date DATE,
  status VARCHAR(10)
);
