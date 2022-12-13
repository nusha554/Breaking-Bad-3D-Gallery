import { React, useState, useEffect } from "react";
import { API_URL, API_URL2 } from "../../config";

const useGetApiData = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    const response = await fetch(`${API_URL}character`);
    //const response = await fetch(`https://www.breakingbadapi.com/api/characters`);
    const charactersData = await response.json();
    console.log(charactersData.results)
    const ListOfCharacters = charactersData.results.slice(0, 15);
    setCharacters(ListOfCharacters);
  };

  return characters;
};

export default useGetApiData;
