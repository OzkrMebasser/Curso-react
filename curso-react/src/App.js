import React, { useState } from "react";

//COMPONENTS
import Form from "./components/Form";

//Estado

const App = () => {
  //State
  const [category, setCategory] = useState("business");
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  //Llamar al API
  const handleSearch = async () => {
    setLoading(true);
    const APIKey = "e162d6ec37984d44ba84b505703b6861";
    const API = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${APIKey}`;

    const response = await fetch(API);
    const { articles } = await response.json();
    setNews(articles);
    console.log(articles);
    setLoading(false);
  };
  console.log("App --->", category);

  return (
    <div className="App">
      <Form
        setCategory={setCategory}
        handleSearch={handleSearch}
        loading={loading}
      />
    </div>
  );
};

export default App;
