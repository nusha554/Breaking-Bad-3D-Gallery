import styled from "styled-components";
import "./styles.css";
import { FaSearch } from "react-icons/fa";

export const Form = styled.form`
    margin: 3rem;
  left: 0.9rem;
  position: relative;
  display: inline-block;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: var(--black);
  width: ${(props) => (props.barOpened ? "30rem" : "2rem")};
  cursor: ${(props) => (props.barOpened ? "auto" : "pointer")};
  padding: 2.3rem;
  height: 2rem;
  border-radius: 10rem;
  transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
`;

export const Input = styled.input`
  line-height: 1;
  background-color: transparent;
  width: 100%;
  height: 1rem;
  padding-top: -5rem;
  margin-left: ${(props) => (props.barOpened ? "" : "0rem")};
  border: none;
  color: var(--green);
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: var(--green);
  }
`;

export const Button = styled.button`
  line-height: 1;
  pointer-events: ${(props) => (props.barOpened ? "auto" : "none")};
  cursor: ${(props) => (props.barOpened ? "pointer" : "none")};
  background-color: transparent;
  border: none;
  outline: none;
  color: var(--green);
`;

export const SearchIcon = styled(FaSearch)`
  font-size: 1.98rem;
  top: -1rem;
  left: -0.9rem;
  position: relative;
`;
