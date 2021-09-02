import React from "react";

//COMPONENTS
import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <Header titulo="Logo 1" numero="1" classCss="header1" />
      <Header titulo="Logo 2" numero="2" classCss="header2" />
      <Header titulo="Logo 3" numero="3" classCss="header3" />
    </div>
  );
};

export default App;
