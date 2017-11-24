import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import coin from '../assets/images//icons/coin.svg';
import buyWhite from '../assets/images/icons/buy-white.svg';
import {redeemProduct, reddemProductAndUpdateUser } from '../actions/user';

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

  .buy-white{
    position:absolute;
    top: 5%;
    right: 10%;
    width: 50px;
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
          <img src={coin} alt='coin' />
        </div>
        <img className='buy-white' src={buyWhite} alt='Buy' />
        <a onClick={ this.handleOnClickRedeem.bind(this, this.props.productId)}>Redeem now !</a>

        <p>{this.props._id}</p>
      </Mask>
    )
  }
}



export default connect(null, {redeemProduct, reddemProductAndUpdateUser}) (RedeemMask);
