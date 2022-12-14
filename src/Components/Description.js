import React, { useState, useEffect } from "react";
// import useDescriptionGenerator from "./helpers/DescriptionGenerator";

const Description = ({ id, characters }) => {
    const [rawTextPerCharacter, setRawTextPerCharacter] = useState("");
    const [descriptionText, setDescriptionText] = useState("");
  
    useEffect(() => {
      setRawTextPerCharacter(
        characters?.filter((character) => character.id === id)
      );
    }, []);
  
    // CLEAN_CODE separate logic to other component
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
      

  return (
    <div>{console.log(descriptionText)}</div>
  );
};

export default Description;
