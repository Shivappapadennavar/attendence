import React, { useState } from "react";
import axios from "axios";

function App() {
  const [studentId, setStudentId] = useState("");
  const [data, setData] = useState([]);

  const getAttendance = async () => {
    const res = await axios.get(
      `http://localhost:5000/api/attendance/${studentId}`
    );
    setData(res.data);
  };

  return (
    <div>
      <h2>Student Attendance</h2>
      <input
        placeholder="Student ID"
        onChange={(e) => setStudentId(e.target.value)}
      />
      <button onClick={getAttendance}>View Attendance</button>

      <ul>
        {data.map((a) => (
          <li key={a.id}>
            {a.date} - {a.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
