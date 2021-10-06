import React, { useEffect } from "react";

//COMPONENTS
import Header from "./components/Header";

const App = () => {
  useEffect(() => {
    sessionStorage.setItem(
      "persona",
      JSON.stringify({ nombre: "daniel", edad: 25 })
    );

    console.log(JSON.parse(sessionStorage.getItem("persona")));
  }, []);

  return (
    <div className="App" id="">
      <Header titulo="Logo 1" numero="1" classCss="header1" isModal={true} />
      {/* const Header = ({titulo: "Logo 1", numero: "1", classCss: "header1", otraProp: "texto"}) => {return jsx} */}
      <Header titulo="Logo 2" numero="2" classCss="header2" otraProp="texto" />
      <Header titulo="Logo 3" numero="3" classCss="header3" otraProp="texto" />
    </div>
  );
};

export default App;
