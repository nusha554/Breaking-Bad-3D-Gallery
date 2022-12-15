import React, { useState, useEffect } from "react";
import { DescriptionContainer } from "./Style/Grid";

const Description = ({ id, characters }) => {
  const [rawTextPerCharacter, setRawTextPerCharacter] = useState("");
  const [descriptionText, setDescriptionText] = useState("");

  useEffect(() => {
    setRawTextPerCharacter(
      characters?.filter((character) => character.id === id)
    );
  }, []);

  useEffect(() => {
    if (rawTextPerCharacter) {
      const gender = rawTextPerCharacter[0]?.gender === "Male" ? 1 : 0;
      const textTemplate = `${rawTextPerCharacter[0].name} is ${
        rawTextPerCharacter[0].species
      } from ${rawTextPerCharacter[0].origin.name}. ${
        gender ? "He" : "She"
      } is currently located at ${rawTextPerCharacter[0].location.name}. ${
        gender ? "He" : "She"
      } is ${rawTextPerCharacter[0].status}, for now.`;
      setDescriptionText(textTemplate);
    }
  }, [rawTextPerCharacter]);

  return <DescriptionContainer>{descriptionText}</DescriptionContainer>;
};

export default Description;
