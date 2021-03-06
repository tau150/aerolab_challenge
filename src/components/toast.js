import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';


const ToastContainer = styled.div `

  display: flex;
  justify-content:flex-end;
  opacity:1;
  transition:opacity 1s linear;
  box-shadow: 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12), 0 2px 4px -1px rgba(0,0,0,.4);
`

const ToastBody = styled.div.attrs({
  background: props =>  {
      if(props.status === 'success'){
        return '#90D696'
      }else if(props.status === 'info'){
        return '#58ACC3';
      }else{
        return '#CA5E57';
      }

  }
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
  margin-top: 10%;
  margin-right: 2%;
  opacity: 0;
  animation: 3s fadeIn;
  animation-fill-mode: forwards;
  visibility: hidden;
  z-index:4000;


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

  @keyframes loading {
	to { transform: rotate(360deg); }
}
  
  #loading{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: transparent;
    margin-left: 10px;
    border-top: 4px solid #fff;
    border-right: 4px solid #fff;
    border-bottom: 4px solid rgba(255,255,255,0.3);
    border-left: 4px solid rgba(255,255,255,0.3);
    animation: loading 1.2s infinite linear;
    
    }
  }


  i{
    color: #fff;
    padding-left:20px;
    font-size: 2rem;

  }

`;


const Toast = (props)=> {

  if( !props.notifications.message ) return null;
  let icon ;
  if(props.notifications.status === 'info' ){
    icon = <div id="loading"></div>
   
  } else if (props.notifications.status === 'success'){
    icon = <i className='ion-checkmark-circled'></i> 
  }else{
    icon = <i className='ion-ios-close-outline'></i>  
  }

  return(
  <ToastContainer>
    <ToastBody status={props.notifications.status}>
       { icon }
      <p>
        {props.notifications.message}
      </p>
    </ToastBody>
    </ToastContainer>
  )
}

const mapStateToProps = ({notifications})=>{

  return {
    notifications,
  }
}

export default connect(mapStateToProps) (Toast);
