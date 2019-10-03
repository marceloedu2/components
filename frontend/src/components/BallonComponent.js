import React from 'react';
import styled from 'styled-components'

const BallonDiv = styled.div`
  position: relative;
  display:inline-block;
  border-bottom: 1px dotted black;
`
const BallonText = styled.span`
  visibility: hidden;
  width: 120px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
  &:efter{
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }
  ${BallonDiv}:hover &{
    visibility: visible;
    opacity: 1;
  }
`
const Ballon = () => {
  return (
    <BallonDiv>
      TESTE
      <BallonText>TESTADO</BallonText>
    </BallonDiv>
  );
}

export default Ballon
