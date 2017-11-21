import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';


const ToastContainer = styled.div `

  display: flex;
  justify-content:flex-end;
  opacity:1;
  transition:opacity 1s linear;
`

const ToastBody = styled.div`
  width: 240px;
  height: 60px;
  position:fixed;
  border-radius: 4px;
  background: #90D696;
  display:flex;
  justify-content:flex-start;
  align-items: center;
  box-shadow: 2px 6px 28px -4px rgba(0,0,0,0.57);
  margin-top: 3%;
  margin-right: 2%;
  opacity: 0;
  animation: 2s fadeIn;
  animation-fill-mode: forwards;
  visibility: hidden;
  z-index:600;


  @keyframes fadeIn {
  99% {
  }
  100% {
    visibility: visible;
    opacity: 1
  }
}

  p{
    color: #fff;
    padding-left: 10px;

  }

  i{
    color: #fff;
    padding-left:20px;
    font-size: 2rem;
  }

`;


const Toast = (props)=> {

  if( !props.notifications.message ) return null;


  return(
  <ToastContainer>
    <ToastBody>

    <i className='ion-ios-checkmark-outline'></i>
      <p>
        {props.notifications.message}
      </p>
    </ToastBody>
    </ToastContainer>
  )
}

const mapStateToProps = ({notifications})=>{

  return {
    notifications
  }
}

export default connect(mapStateToProps) (Toast);
