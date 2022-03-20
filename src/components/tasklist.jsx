import React, { useEffect, useState } from "react";
import "../style.css";

export default function Tasklist() {
  const [taskItem, setTaskItem] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [taskListDone, setTaskListDone] = useState([]);

  useEffect(() => console.log(taskList), [taskList]);

  const handleItem = (index) => {
    const newTaskList = [...taskList];
    newTaskList.splice(index, 1);
    setTaskList(newTaskList);
    setTaskListDone([...taskListDone, taskList[index]]);
  };

  const addItem = () => {
    console.log(taskItem);
    setTaskList([...taskList, taskItem]);
    setTaskItem("");
    console.log(taskList);
  };

  return (
    <div className="lists">
      <div className="list taskList">
        {taskList.map((item, index) => {
          return (
            <p
              className="taskItem"
              onClick={() => handleItem(index)}
              key={index}
            >
              {item}
            </p>
          );
        })}
      </div>
      <div className="list completedList"></div>
      <input
        type="text"
        name=""
        id=""
        onKeyDown={(e) => setTaskItem(taskItem + e.key)}
      />
      <button onClick={() => addItem()}></button>
    </div>
  );
}
