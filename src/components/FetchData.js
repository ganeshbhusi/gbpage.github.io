import React, {useEffect, useState} from "react";

const FetchData = () => {
  const [pokeData, setPokeData] = useState([]);
  useEffect(() => {
    fetchFromAPI();
  }, []);

  useEffect(() => {
    console.log(pokeData, pokeData.length);
  }, [pokeData]);

  const fetchFromAPI = () => {
    const requestOptions = {
      method: "GET",
    };
    fetch("https://pokeapi.co/api/v2/ability/1", requestOptions)
      .then((response) => response.json())
      .then((data) => setPokeData(data));
  };
  return <h1>Hey</h1>;
};

export default FetchData;
