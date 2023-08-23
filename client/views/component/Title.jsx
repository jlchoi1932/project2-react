import styled from "styled-components";
import React from "react";

export default function Title({ title, explanation }) {
  return (
    <div className="margin-bottom">
      <TitleStyle className="title">{title}</TitleStyle>
      <Explanation>{explanation}</Explanation>
    </div>
  );
}

const TitleStyle = styled.h4`
  font-size: 1.6rem;
  font-weight: bold;
  padding: 0.5rem;
  margin-right: 1rem;
`;

const Explanation = styled.p`
  font-size: 1.4rem;
  padding: 0.5rem;
  color: #cccccc;
  border-left: 2px solid #cccccc;
`;
