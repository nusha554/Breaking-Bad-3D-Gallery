import axios from "axios";
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
      axios.get(`${API_URL_RICK_AND_MORTY}/character`).then((response) => {
        const charactersData = response.data;
        const ListOfCharacters = charactersData.results.slice(0, 15);
        setCharacters(ListOfCharacters);
      });
    } catch (error) {
      console.log(error);
    }
  };
  return characters;
};

export default useGetApiData;
