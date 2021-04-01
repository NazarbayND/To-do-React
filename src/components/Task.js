import React, { useState } from "react";
import { ReactComponent as Trash } from "./../assets/trash.svg";

const Task = ({ task, handleDelete }) => {
  const { title, id } = task;
  const [active, setActive] = useState(false);
  const handleClick = () => setActive(!active);
  return (
    <li
      className={`list-group-item list-group-item-action ${
        active ? "active" : ""
      }
      `}
      onDoubleClick={handleClick}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p style={{ margin: "0" }}>{title}</p>{" "}
        <button
          type="button"
          className={active ? "btn btn-danger" : "btn btn-outline-danger"}
          onClick={() => handleDelete(id)}
        >
          <Trash />
        </button>
      </div>
    </li>
  );
};

export default Task;
