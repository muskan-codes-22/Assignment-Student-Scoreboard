import React, { useState } from "react";

function StudentRow({ student, updateScore, deleteStudent }) {
  const [tempScore, setTempScore] = useState(student.score);

  const handleUpdate = () => {
    updateScore(student.id, Number(tempScore));
  };

  return (
    <tr>
      <td>{student.name}</td>

      <td>
        <input
          type="number"
          value={tempScore}
          onChange={(e) => setTempScore(e.target.value)}
        />
      </td>

      <td className={student.score >= 40 ? "pass" : "fail"}>
        {student.score >= 40 ? "Pass" : "Fail"}
      </td>

      <td>
        <button onClick={handleUpdate}>Update</button>

        <button
          onClick={() => deleteStudent(student.id)}
          className="delete-btn"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default StudentRow;
