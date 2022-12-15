import { useState, useEffect } from "react";
// import { API_URL_RICK_AND_MORTY, API_URL_BREAKING_BAD } from "../../config";
import { API_URL_RICK_AND_MORTY } from "../../config";

const useGetApiData = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    try {
      const response = await fetch(`${API_URL_RICK_AND_MORTY}character`);
      //const response = await fetch(`https://cors-anywhere.herokuapp.com/${API_URL_BREAKING_BAD}characters`);
      const charactersData = await response.json();
      const ListOfCharacters = charactersData.results.slice(0, 15);
      setCharacters(ListOfCharacters);
    } catch (error) {
      console.log(error);
    }
  };
  return characters;
};

export default useGetApiData;
