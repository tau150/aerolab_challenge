import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { toggleAlert } from '../actions/notifications';
import { getCoinsAndShowConfirmation } from '../actions/user';

const AlertContainer = styled.div `

    display: flex;
    height: 100%;
    position: absolute;
    align-items:center;
    width: 100%;
    background: rgba(0,0,0,0.3);
    justify-content:center;
    transition: opacity 1s linear;
    animation: 1s fadeIn;
    animation-fill-mode: forwards;
    visibility: hidden;
    opacity: 0;
    z-index: 3000;


    @keyframes fadeIn {
    99% {
    }
    100% {
        visibility: visible;
        opacity: 1
    }
  }
`

const AlertBody = styled.div `
    width: 80%;
    background: #fff;
    padding: 1% 3%;
    position:fixed;
    top: 35vh;
    display: flex;
    justify-content: flex-start;
    heigth: 30vh;
    flex-direction: column;
    box-shadow: 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12), 0 2px 4px -1px rgba(0,0,0,.4);
    z-index: 3000;
    
  
    h5{
        margin-bottom: 0;
    }

    @media( min-width: 576px){
            button{
                width: 30%;
             }
    }
    @media( min-width: 768px){

            width: 40%;

            button{
                width: 10%;
                font-size: 1rem;
                
             }
        }


    .container-buttons{
        display: flex;
        justify-content: space-around;

        button{
            margin: 5%;
            width: 40%;
            border: none;
            border-radius: 0;
            padding: 3% 1%;
            color: #fff;
            box-shadow: 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12), 0 2px 4px -1px rgba(0,0,0,.4);
        }

        button.acept{
            background: #90D696;
        }

        button.cancel{
            background: #CA5E57;
        }
    }
        
    }
  }  
`

const Alert = (props) =>{

     const handleAlert= (showing)=>{
            props.toggleAlert(showing);
        }

    const handleGetCoins=(showing)=>{
        props.getCoinsAndShowConfirmation(showing)
	}

        if(!props.showing) return null;

        return(
         <AlertContainer>
            <AlertBody>
                <h3>Do you confirm the transaction ? </h3>
                <p>It will charge $1000 to your credit card :)</p>
                <div className="container-buttons">
                <button onClick={handleGetCoins.bind(this, props.showing)} className='acept'>Accept</button>
                <button onClick={ handleAlert.bind(this, props.showing) } className='cancel'>Cancel</button>
                </div>
    
            </AlertBody>
         </AlertContainer>
        )
    }
    const mapStateToProps= (state)=>{   
          return   {
            showing: state.notifications.showingAlert
            }
        }

export default connect(mapStateToProps, {toggleAlert, getCoinsAndShowConfirmation })(Alert)