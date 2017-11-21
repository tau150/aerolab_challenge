import React from 'react';
import styled from 'styled-components';
import headerbg from '../assets/images/header-x1.png';



const Main = styled.div`
  background-image: url(${headerbg});
  background-size:cover;
  background-position: 90% 100%;
  height: 300px;
  box-shadow: -1px -11px 24px -9px rgba(0,0,0,0.75);

`;

const Header =() =>{
  return(
    <div>
      <Main />
    </div>

  )
}

export default Header;
