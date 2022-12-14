import { React, useState, useEffect } from "react";
import styled from "styled-components";
import CubeContainer from "./CubeContainer";
import useGetApiData from "./helpers/getApiData";
import CharacterNameHeader from "./CharacterNameHeader";
import InputFilter from "./InputFilter";

const Grid3D = () => {
  const charactersResult = useGetApiData();
  const [filter, setFilter] = useState("");

  return (
    <Wrapper>
      <InputFilter filter={filter} setFilter={setFilter} />
      <ol className="character-item-container">
        {/* maybe write here more CLEAN_CODE */}
        {charactersResult 
          .filter((character) => character.name.toLowerCase().includes(filter))
          .map((character) => {
            return (
              <div
                style={{ display: "inline-block", width: "20%", height: "20%" }}
              >
                <ol className="character-item" key={character.id}>
                  <CharacterNameHeader name={character.name} />
                  <CubeContainer img={character.image} />
                </ol>
              </div>
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

export default Grid3D;
