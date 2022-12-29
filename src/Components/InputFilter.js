/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState, useEffect } from "react";
import { Form, Button, Input, SearchIcon } from "./Style/Input";

const InputFilter = ({ filter, setFilter }) => {
  const [barOpened, setBarOpened] = useState(false);
  const formRef = useRef();
  const inputFocus = useRef();

  const onFormSubmit = (e) => {
    e.preventDefault();
    setFilter("");
    setBarOpened(false);
  };

  useEffect(() => {
    if (!barOpened) setFilter("");
  }, [barOpened]);

  return (
    <Form
      barOpened={barOpened}
      onClick={() => {
        setBarOpened(true);
        inputFocus.current.focus();
      }}
      onFocus={() => {
        setBarOpened(true);
        inputFocus.current.focus();
      }}
      onBlur={() => {
        setBarOpened(false);
      }}
      onSubmit={onFormSubmit}
      ref={formRef}
    >
      <Button type="submit" barOpened={barOpened}>
        {" "}
        {!barOpened ? <SearchIcon /> : ""}{" "}
      </Button>
      <Input
        onChange={(event) => setFilter(event.target.value.toLowerCase())}
        ref={inputFocus}
        value={filter}
        barOpened={barOpened}
        placeholder={barOpened ? "Search for a character..." : ""}
      />
    </Form>
  );
};

export default InputFilter;
