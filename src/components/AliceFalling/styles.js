import styled, { keyframes } from "styled-components";
import background from "./images/background.png";

export const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg) }
`;

export const bounce = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
`;

export const Rotate = styled.div`
  animation: ${rotate} 2s linear infinite;
`;

export const Bounce = styled.div`
  animation: ${bounce} 2s linear infinite;
`;

export const Container = styled.div`
  background-color: black;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

export const BackgroundImage = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  height: 400vh;
  width: 50vw;
`;

export const AliceImg = styled.img`
  height: 10rem;
  width: auto;
  position: fixed;
  top: 10px;
  z-index: 100;
`;

export const FurnitureContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
`;

export const FurnitureRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 85%;
`;

export const Item = styled.img((props) => ({
  height: props.height,
  width: props.width,
}));

export const PositionItem = styled.div((props) => ({
  display: "flex",
  justifyContent: props.position,
  width: "90%"
}));

