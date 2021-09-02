import React, { useState } from "react";

//COMPONENTS
import Header from "./components/Header";
import Section from "./components/Section";
//Estado

const App = () => {
  const [text, setText] = useState("Sin DarkMode");
  const [pageInfo, setPageInfo] = useState([
    {
      title: "Título 1",
      section: "Texto de prueba 1"
    },
    {
      title: "Título 2",
      section: "Texto de prueba 2"
    },
    {
      title: "Título 3",
      section: "Texto de prueba 3"
    }
  ]);

  return (
    <div className="App">
      <Header titulo="Logo 1" numero="1" classCss="header1" setText={setText} />
      <h2 className="header__title">{text}</h2>
      {pageInfo.map((section, index) => (
        <Section title={section.title} section={section.section} key={index} />
      ))}
    </div>
  );
};

export default App;
