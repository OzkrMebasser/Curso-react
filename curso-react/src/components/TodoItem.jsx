import React from "react";

const TodoItem = ({ title, status }) => {
  return (
    <div className="flex justify-between item-center w-full mt-5 border-b-2	border-third_blue py-3">
      <p>{title}</p>
      <button className={`${status ? "bg-red" : "bg-transparent"} py-2 px-5`}>
        {status ? "Borrar" : "Completar"}
      </button>
    </div>
  );
};

export default TodoItem;
