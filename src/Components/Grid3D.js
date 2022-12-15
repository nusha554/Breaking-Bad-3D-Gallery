import { React, useState, useEffect } from "react";
import { Wrapper, Header, CharactersContainer, Character } from "./Style/Grid";
import CubeContainer from "./CubeContainer";
import useGetApiData from "./Helpers/getApiData";
import CharacterNameHeader from "./CharacterNameHeader";
import InputFilter from "./InputFilter";
import Description from "./Description";
import EmptyResult from "./EmptyResult";

const Grid3D = () => {
  const charactersResult = useGetApiData();
  const [filter, setFilter] = useState("");
  const [showDescription, setShowDescription] = useState(false);
  const [characterId, setCharacterId] = useState("");
  const [filteredCharacters, setSetFilteredCharacters] = useState([]);

  useEffect(() => {
    if (filter) {
      filterCharacters();
    } else {
      setSetFilteredCharacters([...charactersResult]);
    }
  }, [filter]);

  useEffect(() => {
    if (charactersResult) {
      setSetFilteredCharacters([...charactersResult]);
    }
  }, [charactersResult]);

  const filterCharacters = () => {
    const filtered = charactersResult.filter((character) =>
      character.name.toLowerCase().includes(filter)
    );
    setSetFilteredCharacters([...filtered]);
  };

  const getDescription = (id) => {
    if (showDescription) setShowDescription(false);
    else setShowDescription(true);

    setCharacterId(id);
  };

  return (
    <Wrapper>
      <Header> 3D Gallery </Header>
      <InputFilter filter={filter} setFilter={setFilter} />
      <CharactersContainer>
        {filteredCharacters?.length > 0 ? (
          filteredCharacters.map((character) => {
            return (
              <Character
                className="character-item"
                key={character.id}
                onClick={() => getDescription(character.id)}
              >
                <CharacterNameHeader name={character.name} />
                <CubeContainer img={character.image} />
                {showDescription && character.id === characterId ? (
                  <Description id={characterId} characters={charactersResult} />
                ) : null}
              </Character>
            );
          })
        ) : (
          <EmptyResult />
        )}
      </CharactersContainer>
    </Wrapper>
  );
};

export default Grid3D;
