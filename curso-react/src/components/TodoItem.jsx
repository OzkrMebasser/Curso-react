import React from "react";

const TodoItem = ({ title, status, setTodoArray, index, todoArray }) => {
  const completeOrDeleteTodo = () => {
    if (status) {
      const deletedTodos = [...todoArray];
      deletedTodos.splice(index, 1);
      setTodoArray(deletedTodos);
    } else {
      const updatedTodos = [...todoArray]; //<----- Array original
      updatedTodos[index].status = true; //<----- El "mismo" array, pero con un valor actualizado
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
