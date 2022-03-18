import React from "react";
import "../style.css";

export default function Tasklist() {
  return (
    <div className="lists">
      <div className="list taskList">
        <p className="taskItem">NOTA MOLTO LUNGA</p>
        <p className="taskItem">1</p>
        <p className="taskItem">1</p>
      </div>
      <div className="list completedList">
        <p className="taskItem">NOTA MOLTO LUNGA</p>
        <p className="taskItem">1</p>
        <p className="taskItem">1</p>
      </div>
    </div>
  );
}
