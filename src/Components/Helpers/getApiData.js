import { React, useState, useEffect } from "react";
import { API_URL_RICK_AND_MORTY, API_URL_BREAKING_BAD } from "../../config";

const useGetApiData = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    const response = await fetch(`${API_URL_RICK_AND_MORTY}character`);
    // const response = await fetch(
    //   `${API_URL_BREAKING_BAD}characters`);
    const charactersData = await response.json();
    const ListOfCharacters = charactersData.results.slice(0, 15);
    setCharacters(ListOfCharacters);
  };

  return characters;
};

export default useGetApiData;
