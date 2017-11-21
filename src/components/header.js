import React from 'react';
import styled from 'styled-components';
import headerbg from '../assets/images/header-x1.jpg';



const Main = styled.div`
  background-image: url(${headerbg});
  background-size:cover;
  background-position: 90% 100%;
  height: 300px;

  @media(min-width: 768px){
      height: 450px;
  }
`;

const Header =() =>{

  return(
    <div>
      <Main />
    </div>

  )
}

export default Header;
