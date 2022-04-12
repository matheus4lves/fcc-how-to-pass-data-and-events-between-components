import React from "react";
import styled from "styled-components";

const Child = ({ phrase }) => {
  return (
    <>
      <Paragraph>{phrase === "" ? "..." : phrase}</Paragraph>
    </>
  );
};

const Paragraph = styled.p`
  color: #333;
  text-align: center;
  font-size: 1.2rem;
`;

export default Child;
