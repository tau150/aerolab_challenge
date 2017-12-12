import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import coin from '../assets/images//icons/coin.svg';
import buyWhite from '../assets/images/icons/buy-white.svg';
import {reddemProductAndUpdateUser } from '../actions/user';


const Mask = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(10, 212, 250, 0.85);
  display flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  box-shadow: 2px 6px 28px -4px rgba(0,0,0,0.57);
  opacity: 0;
  animation: 1s fadeIn;
  animation-fill-mode: forwards;
  visibility: hidden;



  @keyframes fadeIn {
  99% {
  }
  100% {
    visibility: visible;
    opacity: 1
  }
}

  .buy-white{
    position:absolute;
    top: 5%;
    right: 10%;
    width: 50px;
  }


  .favourite-icon{
    color: ${props => props.favourite ? 'violet' :  '#fff'};
  }

  @keyframes spin {
    from {transform:rotateY(0deg);}
    to {transform:rotateY(360deg);}
}

  .coin{
    animation: spin 2s ease;
  }

  a{
    color: #777;
    text-decoration: none;
    background: #fff;
    padding: 12px;
    border-radius: 30px;
    cursor:pointer;
  }

  div{
    display:flex;
    margin-bottom: 5%;

    p{
      padding-right: 10px;
      color: #fff;
      font-size: 3rem;
    }
  }

`



class RedeemMask extends Component {

  handleOnClickRedeem= (product_id)=>{
    this.props.reddemProductAndUpdateUser(product_id)
  }

  

  render() {
    return(
      <Mask>

        <div>
          <p> {this.props.cost}</p>
          <img className='coin' src={coin} alt='coin' />
        </div>
        <img className='buy-white' src={buyWhite} alt='Buy' />
        <a onClick={ this.handleOnClickRedeem.bind(this, this.props.productId)}>Redeem now !</a>
        <p>{this.props._id}</p>
      </Mask>
    )
  }
}

export default connect(null, {reddemProductAndUpdateUser}) (RedeemMask);
