import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Product from '../components/product';
import _ from 'lodash';
import Menu from './menu';
import { getFavourites } from '../actions/products'



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
  }
`;



class ProductsGrid extends Component {


  componentDidMount(){
    this.props.getFavourites()

  }


  render(){

  if( !this.props.products || !this.props.user ) return null;
  
    let cunckedProducts;
    let divider;
    let favouritesDivider;

    if(this.props.products.length <= 16 ){
      divider = 1;
    }else if(this.props.products.length <= 50  ){
      divider = 2;
    }else{
      divider = 3
    }

    if(this.props.favourites.length <= 16 ){
      favouritesDivider = 1;
    }else if(this.props.favourites.length <= 50  ){
      favouritesDivider = 2;
    }else{
      favouritesDivider = 3;
    }

    if( this.props.criteria !== 'favourites' || this.props.favourites.length <= 0){
       cunckedProducts = _.chunk(this.props.products, this.props.products.length / divider)
    }else{
        cunckedProducts = _.chunk(this.props.favourites, this.props.favourites.length / favouritesDivider)
    }

    const productsList = cunckedProducts[this.props.idx].map( (product)=>{

        return(
          <Product available={ this.props.user.points - product.cost >= 0 ? true : false}
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
        <Menu chunkedProducts = {cunckedProducts} divider={divider} favouritesDivider= {favouritesDivider} />
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
    idx: state.products.idx,
    favourites: state.products.favourites,
    criteria: state.products.criteria,
  }
}

export default connect( mapStateToProps, { getFavourites } ) (ProductsGrid);
