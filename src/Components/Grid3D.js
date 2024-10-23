import { React, useState, useEffect, useMemo } from "react";
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

  const characterData = useMemo(() => {
    return charactersResult;
  });

  useEffect(() => {
    const filterCharacters = () => {
      const filtered = characterData.filter((character) =>
        character.name.toLowerCase().includes(filter)
      );
      setSetFilteredCharacters([...filtered]);
    };

    if (filter) {
      filterCharacters();
    } else {
      setSetFilteredCharacters([...characterData]);
    }
  }, [filter, characterData]);

  useEffect(() => {
    if (charactersResult) {
      setSetFilteredCharacters([...charactersResult]);
    }
  }, [charactersResult]);

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
