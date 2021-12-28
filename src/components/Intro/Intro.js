import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styled, { css, keyframes } from "styled-components";
import CeilingLamp from "./CeilingLamp";
import Rabbit from "./Rabbit";
import RabbitHole from "./RabbitHole";
import Ground from "./Ground";

export default function Intro() {
  const [lightOn, setLightOn] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showRabbit, setShowRabbit] = useState(true);

  setTimeout(() => setLightOn(true), 2000);
  setTimeout(() => setShowButton(true), 5000);

  const handleClick = () => {
    setShowRabbit(false);
    setClicked(true);
  };

  const renderOnLight = () => {
    return (
      <>
        <Ground />
        <RabbitHole zoom={clicked} />
        <Rabbit show={showRabbit} hide={() => handleClick()} />
      </>
    );
  };

  return (
    <>
      <CanvasContainer>
        <Canvas camera={{ position: [0, 30, 100], fov: 100 }}>
          {!clicked && <OrbitControls />}
          <ambientLight intensity={lightOn ? 0.3 : 0} />
          <CeilingLamp lightOn={lightOn} />
          {lightOn && renderOnLight()}
        </Canvas>
      </CanvasContainer>
      <Button show={showButton} onClick={() => handleClick()}>
        Follow Rabbit
      </Button>
      <Text large>Alice</Text>
      <Text show={showButton}>in animation land</Text>
    </>
  );
}

const CanvasContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: black;
`;

const Text = styled.p((props) => ({
  position: "absolute",
  bottom: props.large ? "6rem" : "2rem",
  left: 0,
  right: 0,
  textAlign: "center",
  color: "white",
  fontFamily: "TitleFont",
  fontSize: props.large ? "5rem" : "4rem",
  userSelect: "none",
}));

const Button = styled.button`
  display: ${(props) => (props.show ? "block" : "none")};
  position: absolute;
  bottom: 25rem;
  left: 50%;
  transform: translate(-50%, 50%);
  background: none;
  color: orange;
  font-size: 2rem;
  font-family: TitleFont;
  border: none;
  cursor: pointer;
  animation: ${(props) =>
    props.show &&
    css`
      ${opacity} 3s ease-in
    `};
`;

const opacity = keyframes`
  0% { opacity: 0; } 
  100% { opacity: 1; }
`;
