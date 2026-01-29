const express = require("express");
const router = express.Router();
const controller = require("../controllers/attendanceController");

router.post("/attendance", controller.markAttendance);
router.get("/attendance/:id", controller.getAttendance);

module.exports = router;
