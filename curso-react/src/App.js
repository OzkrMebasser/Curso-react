import React, { useState, useEffect } from "react";

//COMPONENTS

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";

const list = [
  {
    title: "Estudiar JS",
    status: true
  },
  {
    title: "Preparar la comida",
    status: false
  }
];

const App = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoArray, setTodoArray] = useState([]);

  const handleAddTodo = () => {
    setTodoArray([...todoArray, { title: todoTitle, status: false }]);
    setTodoTitle("");
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("todoList"))) {
      setTodoArray(JSON.parse(localStorage.getItem("todoList")));
      console.log("Si existe");
    } else {
      setTodoArray(localStorage.setItem("todoList", JSON.stringify([])));
      console.log("No existe");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoArray));
  }, [todoArray]);

  return (
    <div className="h-screen bg-second_blue flex justify-center items-center">
      <div className="bg-third_blue md:bg-main_blue w-full text-white px-10 py-10 rounded md:w-5/12 h-2/3	overflow-scroll	">
        <h2 className="text-left text-3xl">TODO List</h2>
        <AddTodo
          todoTitle={todoTitle}
          setTodoTitle={setTodoTitle}
          handleAddTodo={handleAddTodo}
        />

        <TodoList>
          {/* children */}
          {todoArray?.length > 0 &&
            todoArray.map((task, index) => (
              <TodoItem
                title={task.title}
                status={task.status}
                setTodoArray={setTodoArray}
                index={index}
                todoArray={todoArray}
                key={index}
              />
            ))}
          {/* children */}
        </TodoList>
      </div>
    </div>
  );
};

export default App;
