
import React, { Component } from 'react';
import styled from 'styled-components';
import BuyBlue from '../assets/images/icons/buy-blue.svg';
import MissingBadge from './missing_badge';
import { connect } from 'react-redux';
import ReedemMask from '../containers/redeem_mask';
import { removeLoading } from '../actions/notifications'
import { checkAndAddFavourites } from '../actions/products'




const ProductContainer = styled.div`
  border: 1px solid #eaeaea;
  background: #fff;
  display: flex;
  align-items:center;
  flex-direction:column;
  position:relative;
  z-index: 1;
  opacity: 0;
  animation: 3s fadeIn;
  animation-fill-mode: forwards;

  @keyframes fadeIn {
  99% {
  }
  100% {
    visibility: visible;
    opacity: 1
  }
}

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

const Icon = styled.i`
position:absolute;
top: 5%;
left: 10%;
font-size: 40px;
cursor: pointer;
color: ${props => props.favourite ? '#FF0000' :  '#FBD4CE'};
`



class Product extends Component {
  constructor(props){
    super(props);
    this.state={
      show: false
    }

  }

  handleOnClickFavourites = (product_id)=>{
    this.props.checkAndAddFavourites(product_id)
  }

  checkFavourite= ()=>{
    return this.props.favourites.find(elem => elem._id === this.props.productId )
  }

   renderRedeem=(showing)=>{

     if(this.props.user.points - this.props.cost  >= 0) {
          this.setState({show: showing})
     }else{
         this.setState({show: false})
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
                      onMouseEnter={ this.renderRedeem.bind(this, true) }
                      onMouseLeave={ this.renderRedeem.bind(this, false) }
                      onMouseOver= { this.renderRedeem.bind(this, true) }
                      >
                  
      { missingBadge }
      { buyIcon }
      { redeem }
    
      <Icon className='ion-heart' favourite={this.checkFavourite()} onClick={ this.handleOnClickFavourites.bind(this, this.props.productId)}></Icon>
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
    user:state.user.LoggedUser,
    favourites: state.products.favourites
  }
}


export default connect(mapStateToProps, {removeLoading, checkAndAddFavourites}) (Product);
