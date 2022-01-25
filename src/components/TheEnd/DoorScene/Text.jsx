import React from "react";
import styled, { keyframes } from "styled-components";

export default function Text() {
  return <InstructionText>Drag keyhole to continue</InstructionText>;
}

const showText = keyframes`
  0% { opacity: 0; } 
  20% { opacity: 0; } 
  100% { opacity: 1; }
`;

const InstructionText = styled.p`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 0%);
  color: orange;
  font-family: arial;
  opacity: 0;
  font-size: 1.5rem;
  user-select: none;
  animation: ${showText} 2s linear forwards;
  animation-delay: 3s;
`;
