import React from 'react';
import styled from 'styled-components';
import headerbg from '../assets/images/header-x1.jpg';



const Main = styled.div`
  background-image: url(${headerbg});
  background-size:cover;
  background-position: 90% 100%;
  height: 300px;
  display: flex;
  align-items: flex-end;
  margin-top:15vh;

  h1{
    color: #fff;
    margin-bottom: 5%;
    font-size: 2rem;
    margin-left: 7%;
    text-shadow: 4px -2px 5px rgba(150, 150, 150, 1);

  }

  @media(min-width: 768px){
      height: 450px;

    h1{

    font-size: 3rem;


    }
  }
`;

const Header =() =>{

  return(
    <div>
      <Main>
        <h1>Electronics</h1>
      </Main>

    </div>

  )
}

export default Header;
