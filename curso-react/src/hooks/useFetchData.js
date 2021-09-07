import { useState, useEffect } from "react";

const useFetchData = url => {
  //Estado del componente
  const [data, setData] = useState([]);

  //Consultamos la API
  const handleFetchAPI = async () => {
    try {
      const response = await fetch(url);
      // const result = await response.json();
      const result = await response.json();
      //Guardamos results en estado
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetchAPI();
  }, [url]);

  return data;
};

export default useFetchData;
