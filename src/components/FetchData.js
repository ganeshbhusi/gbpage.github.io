import React, {useEffect, useState} from "react";
import "./FetchData.css";


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
    fetch("https://pokeapi.co/api/v2/ability", requestOptions)
      .then((response) => response.json())
      .then((data) => setPokeData(data.results));
  };

  const renderEachItem = (item, index) => {
    return (
      <tr>
        <td>{item.name}</td>
        <td>{item.url}</td>
      </tr>
    );
  };
  return (
    <div>
      <table>
        <tr>
          <th>Title</th>
          <th>URL</th>
        </tr>
        {pokeData !== [] ? pokeData.map((item, index) => renderEachItem(item, index)) : (<p>Empty Data</p>)}
      </table>
    </div>
  );
};

export default FetchData;
