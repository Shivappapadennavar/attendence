const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const attendanceRoutes = require("../routes/attendanceRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api", attendanceRoutes);

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
