import { React, useState, useEffect } from "react";
import { API_URL } from "../config";


const ApiData = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    const response = await fetch(`${API_URL}character`);
    const charactersData = await response.json();
    console.log(charactersData.results);
    setCharacters(charactersData.results);
  };

  return (
    <div>
      <ol className="charcter-item-container">
        {characters?.map((character) => {
          return (
            <ol className="charcter-item" key={character.id}>
              {character.name}
              <img src={character.image} alt="icons" />
            </ol>
          );
        })}
      </ol>
    </div>
  );
};

export default ApiData;
