import React, { useState } from "react";

function TodoList(props) {
  const [isDone, setIsDone] = useState(false);

  function handleclick() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div onClick={handleclick}>
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
}

export default TodoList;
