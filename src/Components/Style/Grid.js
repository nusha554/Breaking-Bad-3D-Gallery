import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 5em;
  canvas {
    height: 500px;
  }
`;

export const Header = styled.div`
  text-align: center;
  font-size: 5rem;
  font-weight: bolder;
  padding: 1.9rem;
`;

export const InputFilter = styled.div``;

export const CharactersContainer = styled.ol`
  padding: 6rem 2rem;
  margin: 1rem;
  width: 100%;
`;

export const Character = styled.ol`
  position: relative;
  top: -3rem;
  margin: 1rem;
  display: inline-block;
  width: 30%;
  height: 30%;
  cursor: pointer;
`;

export const NameHeader = styled.div`
  position: relative;
  top: 4rem;
  font-size: 1.7rem;
  font-weight: bolder;
  color: var(--black);
`;

export const DescriptionContainer = styled.div`
  background-color: rgba(165, 192, 91, 0.5);
  display: grid;
  position: relative;
  top: -4rem;
  margin: -2.5rem auto -5rem auto;
  padding: 1.5rem;
  border-radius: 3rem;
`;

export const DescriptionText = styled.div`
  font-weight: 300;
  font-size: 1rem;
`;

export const EmptyResultContainer = styled.div`
  font-size: 3.5rem;
  color: var(--black);
  font-weight: bold;
  text-align: center;
  padding: 5rem;
  align-items: center;
`;
