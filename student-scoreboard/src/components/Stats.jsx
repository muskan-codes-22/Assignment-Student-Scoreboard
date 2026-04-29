import React from "react";

function Stats({ total, passed, avg }) {
  return (
    <div className="stats-container">
      <div className="stat-box">
        <p>Total</p>
        <h2>{total}</h2>
      </div>

      <div className="stat-box">
        <p>Passed</p>
        <h2>{passed}</h2>
      </div>

      <div className="stat-box">
        <p>Average</p>
        <h2>{avg}</h2>
      </div>
    </div>
  );
}

export default Stats;