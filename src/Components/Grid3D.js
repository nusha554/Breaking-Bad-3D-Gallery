import React from "react";
import styled from "styled-components";
import CubeContainer from "./CubeContainer";
import useGetApiData from "./helpers/getApiData";
import CharacterNameHeader from "./CharacterNameHeader"

const Grid3D = () => {

  const characters = useGetApiData();

  
  return (
    <Wrapper>
      <ol className="character-item-container">
        {characters?.map((character) => {
          return (
            <ol className="character-item" key={character.id}>
              <CharacterNameHeader name={character.name}/>
               <CubeContainer img={character.image}/>
            </ol>
          );
        })}
      </ol>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  canvas {
    height: 400px;
  }
`;

export default Grid3D
