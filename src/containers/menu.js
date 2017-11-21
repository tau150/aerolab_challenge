import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts, orderProducts, fetchProductsWithLoading, nextPage, prevPage } from '../actions/products';
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
`;



class Menu extends Component {
  constructor(props){
    super(props);

    this.state={
      order: 'most_recent'
    }
  }



  handleOnClickOrder(products, criteria, order, order_name){
    this.setState({order: order_name})
    this.props.orderProducts(products, criteria, order);
  }

  handleNextPage(products, idx, chunkedProducts){
    this.props.nextPage(products, idx, chunkedProducts);
  }

  handlePrevPage(products, idx, chunkedProducts){
    this.props.prevPage(products, idx, chunkedProducts);
  }

  render(){

    if ( ! this.props.products ) return null;

    return(
      <MenuBar>
        <div className="container-sort-description">
          <p> {(( this.props.idx + 1) * 16)} of {this.props.products.length} products</p>
          <p>Sort by: </p>
        </div>
        <div className="container-badges">
          <FilterBadge className={this.state.order === 'most_recent' ? 'active' : null }
                       onClick={()=> this.handleOnClickOrder(this.props.products, '_id', 'asc', 'most_recent')}>
                       Most Recent
          </FilterBadge>
          <FilterBadge className={this.state.order === 'low_price' ? 'active' : null }
                       onClick={()=> this.handleOnClickOrder(this.props.products, 'cost', 'asc', 'low_price')}>
                       Low Price
          </FilterBadge>
          <FilterBadge className={this.state.order === 'highest_price' ? 'active' : null }
                       onClick={()=> this.handleOnClickOrder(this.props.products, 'cost', 'desc', 'highest_price')}>
                       Highest Price
          </FilterBadge>
        </div>


        <div className="container-arrows">
          <img onClick={()=> this.handlePrevPage(this.props.products, this.props.idx, this.props.chunkedProducts)} src={ArrowLeft} alt=""/>
          <img onClick={()=> this.handleNextPage(this.props.products, this.props.idx, this.props.chunkedProducts)} src={ArrowRight} alt=""/>
        </div>
      </MenuBar>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    products: state.products.products,
    idx: state.products.idx
  }
}

export default connect(mapStateToProps, { fetchProducts, orderProducts, fetchProductsWithLoading , nextPage, prevPage}) (Menu)
