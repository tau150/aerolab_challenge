
import React, { Component } from 'react';
import styled from 'styled-components';
import BuyBlue from '../assets/images/icons/buy-blue.svg';
import MissingBadge from './missing_badge';
import { connect } from 'react-redux';
import ReedemMask from '../containers/redeem_mask';
import { removeLoading } from '../actions/notifications'



const ProductContainer = styled.div`
  border: 1px solid #eaeaea;
  background: #fff;
  display: flex;
  align-items:center;
  flex-direction:column;
  position:relative;



  .product-img{
    width: 100%;
  }
  &:hover .mask{
    background: red;
  }

  .buy-blue{
    position:absolute;
    top: 5%;
    right: 10%;
    width: 50px;
  }

  p{
    color: #777;
    align-self:left;
    margin-left: 10%;
    font-size: .8rem;
  }

  span{
    height: 2px;
    width: 80%;
    background: #eaeaea;
  }

  h6{
    margin-top: 0;
    align-self:left;
    margin-left: 10%;
    font-size: 1rem;
  }

 @media( min-width: 550px){
   .buy-blue{
     width: 30px;
   }
 }


`;


class Product extends Component {
  constructor(props){
    super(props);

    this.state={
      show: false
    }

  }


   renderRedeem=()=>{

     if(this.props.user.points - this.props.cost  >= 0){
        if(this.state.show){
          this.setState({show:false})
        }else{
          this.setState({show:true})
        }

     }
  }


  render(){

  let missingBadge =( <MissingBadge difference={ this.props.cost - this.props.user.points } />);
  let buyIcon = (<img className='buy-blue' alt='buy-icon' src={BuyBlue} />);
  let redeem = null;

  if( this.props.available ){
    missingBadge = null;
  }else{
    buyIcon = null;
  }

  if(this.state.show){
    redeem =(<ReedemMask className='mask' productId={this.props.productId} cost={this.props.cost} />);
    buyIcon = null;
  }

  return(

    <ProductContainer className='product'
                      onMouseEnter={ this.renderRedeem }
                      onMouseLeave={this.renderRedeem }>
      { missingBadge }
      { buyIcon }
      { redeem }
      <img className='product-img' src={this.props.img} alt={this.props.name}/>
      <span></span>
      <p>{this.props.category}</p>
      <h6>{this.props.name}</h6>
    </ProductContainer>
  )
    }
}

const mapStateToProps = (state)=>{
  return {
    user:state.user.LoggedUser
  }
}


export default connect(mapStateToProps, {removeLoading}) (Product);
