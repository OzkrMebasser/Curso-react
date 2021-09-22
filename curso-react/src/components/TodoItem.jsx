import React from "react";

const TodoItem = ({ title, status, setTodoArray, index, todoArray }) => {
  const completeOrDeleteTodo = () => {
    if (status) {
      console.log("Tarea terminada");
    } else {
      const updatedTodos = [...todoArray];
      updatedTodos[index].status = true;
      setTodoArray(updatedTodos);
    }
  };

  return (
    <div className="flex justify-between item-center w-full mt-5 border-b-2	border-third_blue py-3">
      <p className={`${status ? "line-through" : ""}`}>{title}</p>
      <button
        className={`${status ? "bg-red" : "bg-transparent"} py-2 px-5`}
        onClick={completeOrDeleteTodo}
      >
        {status ? "Borrar" : "Completar"}
      </button>
    </div>
  );
};

export default TodoItem;
