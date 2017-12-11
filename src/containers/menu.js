import React, { Component } from 'react';
import { connect } from 'react-redux';
import { orderProducts, fetchProductsWithLoading, nextPage, prevPage } from '../actions/products';
import styled from 'styled-components';
import ArrowRight from '../assets/images/icons/arrow-right.svg'
import ArrowLeft from '../assets/images/icons/arrow-left.svg'

const MenuBar = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  align-items: center;
  color: #777;

  p{
    margin: 10px;
    font-size: 0.5rem;
  }

  .active{
      background: #0AD4FA;
      color: #fff;
  }

  img{
    width: 40px;
    margin: 10px;
  }

    .container-sort-description{
      width: 100%;
      display:flex;
      flex-direction:column;
      align-items:center;
    }


    .container-filter{
      display:flex;
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items:center;
      margin-bottom: 5%;
    }

    .categories-select{
      display: flex;
      justify-content: center;
    }

   
    .categories-select select{
      text-align:center;
      padding: 5px 8px;
      width: 80%;
      color: #777;
      background: #eaeaea;
      border-radius: 15px;
      font-size: 0.7rem;
      cursor: pointer;
      border: none;
    }
 
   .container-badges, .container-arrows{
      width: 100%;
      display:flex;
      justify-content: center;
    }


  @media(min-width: 550px){
    justify-content: space-around;
    flex-wrap: no-wrap;

    p{
      margin: 10px 5px;
      font-size: .9rem;
    }

    img{
      width: 30px;
      margin-right: 10px;
      width: 40px;
      
  }
    }



    @media(min-width: 768px){

        justify-content: space-around;

        p{

          font-size: 1rem;
        }

        .container-sort-description{
          width: 30%;
          display:flex;
          flex-direction:row;
          justify-content: center;

          p{
            margin: 10px;
          }

        }
          .container-filter{
            display:flex;
            width: 100%;
            flex-direction: row;
            justify-content: flex-start;
            margin-left: 15%;
            align-items:center;
          }

        .container-badges{
          width: 50%;
          display:flex;
          justify-content: flex-start;

        }
        .container-arrows{
          width: 50%;
          display:flex;
          justify-content: center;
        }

        .container-arrows{
            width: 20%;
            display:flex;
            justify-content: center;

            img{
              cursor: pointer;
            }
          }
    }

    @media(min-width: 992px){
      .container-sort-description p{
          margin-left: auto;
        }
    }

  }
`;

const FilterBadge = styled.p`
  color: #777;
  background: #eaeaea;
  display: inline-block;
  padding: 5px 8px;
  border-radius: 15px;  
  font-size: 0.7rem;
  cursor: pointer;
  opacity: 0;
  animation: 2s fadeIn;
  animation-fill-mode: forwards;
  pointer-events: ${props => props.className === 'active' ? 'none' :  null};


  @keyframes fadeIn {
    99% {
    }
    100% {
      visibility: visible;
      opacity: 1
    }
  }

  &:hover{
    box-shadow: 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12), 0 2px 4px -1px rgba(0,0,0,.4);
  }
  
`;



class Menu extends Component {
  constructor(props){
    super(props);

    this.state={
      order: 'most_recent',
      showingFavourites: false,
    }

  }


  handleOnClickOrder=(products, criteria, order, order_name)=>{
    if( criteria === 'favourites' ){
      this.setState({order: order_name, showingFavourites: true})
    }else{  
  
      this.setState({order: order_name, showingFavourites:false})
    }
    this.props.orderProducts(products, criteria, order, order_name);
  }
  
  handleNextPage=(products, idx, chunkedProducts)=>{
    this.props.nextPage(products, idx, chunkedProducts);
  }

  handlePrevPage =(products, idx, chunkedProducts)=>{
    this.props.prevPage(products, idx, chunkedProducts);
  }

  handleNoFavourites(){
    if( this.state.order === 'favourites' && this.props.favourites.length === 0){
      this.handleOnClickOrder(this.props.products, '_id', 'asc', 'most_recent')
    }
  }

  componentDidUpdate(){
    this.handleNoFavourites()
  }

  render(){

    let menuDescription;

    if( this.state.showingFavourites && this.props.favourites.length > 0){
      menuDescription = (<p> { Math.floor(( this.props.idx + 1) * this.props.favourites.length / this.props.favouritesDivider )} of {this.props.favourites.length} products</p>)
    }else{
      menuDescription = (<p> { Math.floor((( this.props.idx + 1) * this.props.products.length / this.props.divider))} of {this.props.products.length} products</p>)
    }
    
    if ( ! this.props.products ) return null;

    

    return(
      <MenuBar>
        <div className="container-sort-description">
          {menuDescription}
          <p>Sort by: </p>
        </div>
        <div className="container-badges">
          <FilterBadge className={ this.state.order === 'most_recent' ? 'active' : null }
                       onClick={ this.handleOnClickOrder.bind(this, this.props.products, '_id', 'asc', 'most_recent')}>
                       Most Recent
          </FilterBadge>
          <FilterBadge className={this.state.order === 'low_price' ? 'active' : null }
                       onClick={ this.handleOnClickOrder.bind(this, this.props.products, 'cost', 'asc', 'low_price')}>
                       Low Price
          </FilterBadge>
          <FilterBadge className={this.state.order === 'highest_price' ? 'active' : null }
                       onClick={ this.handleOnClickOrder.bind(this, this.props.products, 'cost', 'desc', 'highest_price')}>
                       Highest Price
          </FilterBadge>
          { this.props.favourites.length > 0 ? 
          (<FilterBadge className={this.state.order === 'favourites' ? 'active' : null }
                       onClick={  this.handleOnClickOrder.bind(this, this.props.products, 'favourites', 'desc', 'favourites')}>
                       My Favourites
          </FilterBadge>) : null   }
         
          </div>

          <div className="container-arrows">
            <img onClick={ this.handlePrevPage.bind(this, this.props.products, this.props.idx, this.props.chunkedProducts)} src={ArrowLeft} alt=""/>
            <img onClick={ this.handleNextPage.bind(this, this.props.products, this.props.idx, this.props.chunkedProducts)} src={ArrowRight} alt=""/>
          </div>
      </MenuBar>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    products: state.products.products,
    idx: state.products.idx,
    favourites: state.products.favourites,
  }
}

export default connect(mapStateToProps, { orderProducts, fetchProductsWithLoading , nextPage, prevPage}) (Menu)
