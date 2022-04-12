import React, { useState } from "react";
import Child from "./Child";
import styled from "styled-components";

const Parent = () => {
  const [phrase, setPhrase] = useState("");

  const handleClick = () => {
    setPhrase(`"Perfect is the enemy of good" - Voltaire`);
  };

  return (
    <>
      <Container>
        <Child phrase={phrase} />
        <Button onClick={handleClick}>Click me!</Button>
      </Container>
    </>
  );
};

const Button = styled.button`
  padding-block: 1.2rem;
  padding-inline: 2rem;
  border-block: 2px solid #333;
  border-inline: 2px solid #333;
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
  background-color: #2185d0;
  border-start-start-radius: 10px;
  border-start-end-radius: 10px;
  border-end-start-radius: 10px;
  border-end-end-radius: 10px;
  display: block;
  margin: auto;
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Parent;
