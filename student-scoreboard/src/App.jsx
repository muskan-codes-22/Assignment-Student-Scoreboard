import React, { useState } from "react";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";
import Stats from "./components/Stats";
import "./styles/style.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Muskan", score: 85 },
    { id: 2, name: "Rahul", score: 35 },
  ]);

  // Update score
  const updateScore = (id, newScore) => {
    const updated = students.map((student) =>
      student.id === id ? { ...student, score: newScore } : student
    );
    setStudents(updated);
  };

  // Add student
  const addStudent = (name, score) => {
    if (!name || score === "") return;

    const newStudent = {
      id: Date.now(),
      name,
      score,
    };

    setStudents([...students, newStudent]);
  };

  // Delete student
  const deleteStudent = (id) => {
    const filtered = students.filter((student) => student.id !== id);
    setStudents(filtered);
  };

  // 🔥 STATS CALCULATIONS
  const totalStudents = students.length;

  const passedStudents = students.filter(
    (student) => student.score >= 40
  ).length;

  const avgScore =
    totalStudents === 0
      ? 0
      : Math.round(
          students.reduce((sum, s) => sum + s.score, 0) / totalStudents
        );

  return (
    <div className="app-container">
      <Header />

      <AddStudentForm addStudent={addStudent} />

      {/* 🔥 ADD THIS (you missed this) */}
      <Stats
        total={totalStudents}
        passed={passedStudents}
        avg={avgScore}
      />

      <div className="table-container">
        <StudentTable
          students={students}
          updateScore={updateScore}
          deleteStudent={deleteStudent}
        />
      </div>
    </div>
  );
}

export default App;
