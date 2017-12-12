import React from 'react';
import styled from 'styled-components';
import coin from '../assets/images//icons/coin.svg';

const Badge = styled.div`
  width: 60%;
  background: rgba(0,0,0,0.7);
  position: absolute;
  top: 10%;
  right: 5%;
  padding: 5px 10px;
  color: #fff;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;


    img{
      padding: 5px 0 5px 5px;
      width: 20px;

  }
`


const MissingBadge = (props) =>{
  return(
    <Badge>
      <a>You need {props.difference} </a>
      <img src={coin} alt=""/>
    </Badge>
  )
}


export default MissingBadge;
