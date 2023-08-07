import React from "react";
import { MdDeleteOutline, MdOutlineAddTask } from "react-icons/md";

const View = ({ todos, deleteTodo }) => {
  return (
    <div>
      {todos.map((todo, index) => {
        return (
          <div className="col-md-3 display-todo" key={index}>
            <h4>Title: {todo.title}</h4>
            <h4>Description</h4>
            <p>{todo.desc}</p>
            <button
              className="btn btn-danger remove-btn"
              onClick={() => deleteTodo(index)}
            >
              <MdDeleteOutline className="icon remove-icon" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default View;
