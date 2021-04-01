import React, { useRef } from "react";

const TaskAdd = ({ handleAdd }) => {
  const text = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.current.value) return;
    handleAdd(text.current.value);
    text.current.value = null;
    text.current.focus();
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="input-group mb-3">
        <input
          ref={text}
          type="text"
          className="form-control"
          placeholder="new task"
          aria-label="new task"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleSubmit}
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TaskAdd;
