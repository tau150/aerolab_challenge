import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';


const AlertContainer = styled.div `

    display: flex;
    height: 100%;
    position: absolute;
    align-items:center;
    width: 100%;
    justify-content:center;
    z-index: 3000;
`

const Lock = (props) =>{

        if(!props.showing) return null;
        return(
         <AlertContainer>

         </AlertContainer>
        )
    }

    const mapStateToProps = (state)=>{
        return {
          showing:state.notifications.showingLock,
        }
      }

export default connect(mapStateToProps)(Lock)