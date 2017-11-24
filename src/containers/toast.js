import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';


const ToastContainer = styled.div `

  display: flex;
  justify-content:flex-end;
  opacity:1;
  transition:opacity 1s linear;
`

const ToastBody = styled.div.attrs({
  background: props => props.success ? '#90D696' : 'red'
})`

  width: 240px;
  height: 60px;
  position:fixed;
  border-radius: 4px;
  background: ${props => props.background};
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

  let icon = props.status ?  <i className='ion-ios-checkmark-outline'></i> : <i className='icon ion-alert-circled'></i>  ;


  return(
  <ToastContainer>
    <ToastBody success={props.status}>
      { icon }
      <p>
        {props.notifications.message}
      </p>
    </ToastBody>
    </ToastContainer>
  )
}

const mapStateToProps = ({notifications, status})=>{

  return {
    notifications,
    status
  }
}

export default connect(mapStateToProps) (Toast);
