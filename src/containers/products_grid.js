import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeLoading } from '../actions/notifications';
import { fetchProducts, orderProducts, fetchProductsWithLoading } from '../actions/products';

import styled from 'styled-components';
import Product from '../components/product';
import _ from 'lodash';
import Menu from './menu';



const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  background: #F9F9F9;

  .product{
    width: 100%;
    margin: 20px 0;
  }


  @media(min-width: 550px){
    .product{
      width: 40%;
      margin: 20px 0;
    }

  @media(min-width: 768px){
    .product{
      width: 30%;
      margin: 20px 0;
    }
  }
`;



class ProductsGrid extends Component {

  componentDidUpdate(){
    this.props.removeLoading();
  }
  componentWillMount(){
    this.props.fetchProductsWithLoading();
  }


  render(){

  if( !this.props.products || !this.props.user ) return null;

    const cunckedProducts = _.chunk(this.props.products, 16)

    const productsList = cunckedProducts[this.props.idx].map( (product)=>{

        return(
          <Product available={ this.props.user.points - product.cost > 0 ? true : false}
                   key={product._id}
                   productId= {product._id}
                   active={false}
                   cost={product.cost}
                   name={product.name}
                   img={product.img.url}
                   category={product.category} />
        )
      })

    return(
      <div>
        <Menu chunkedProducts = {cunckedProducts}/>
        <Grid>
            {productsList}
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    user: state.user.LoggedUser,
    products:state.products.products,
    idx: state.products.idx

  }
}

export default connect( mapStateToProps, {removeLoading, fetchProductsWithLoading, fetchProducts, orderProducts} ) (ProductsGrid);
