import React from 'react';
import styled from 'styled-components';

const Icon = styled.i`
position:absolute;
top: 5%;
left: 10%;
font-size: 40px;
z-index: 2000;
cursor: pointer;
`

const FavouriteIcon =(props)=> {

    return(
        <Icon className='ion-heart favourite-icon'> </Icon>
    )
}

export default  FavouriteIcon;