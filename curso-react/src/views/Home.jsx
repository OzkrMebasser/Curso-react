import React, { useEffect, useState } from "react";

import Header from "../components/Header";
import CoincapTable from "../components/Home/CoincapTable";
import Loader from "../components/Loader";
import { setTimeout } from "timers";

const Home = () => {
  //State
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  //API
  const fetchData = async () => {
    setLoader(true);

    try {
      const API = "https://api.coincap.io/v2/assets?limit=15";
      const response = await fetch(API);
      const { data } = await response.json();
      console.log(data);
      setData(data);
      setTimeout(() => {
        setLoader(false);
      }, 2000);
    } catch (error) {
      setLoader(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [x, y]);

  return (
    <>
      <select name="" id="">
        {variable.map(option => (
          <option>{option - value}</option>
        ))}
      </select>
      <Header />
      {loader ? <Loader /> : <CoincapTable data={data} />}
    </>
  );
};

export default Home;
