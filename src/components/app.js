import React, { Component } from 'react';
import { connect } from 'react-redux'
import LoggedUser from '../containers/logged_user';
import Header from './header';
import ProductsGrid from '../containers/products_grid';
import styled from 'styled-components';
import Toast from '../containers/toast'
import { fetchProductsWithLoading, removeLoading } from '../actions/products';
import Loading from './loading';

const AppContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  position: relative;
`;


class App extends Component {


    componentWillMount(){
      this.props.fetchProductsWithLoading();
    }

  render() {
    return (
    <AppContainer>
      <Loading />
      <Toast />
      <LoggedUser />
      <Header />

      <ProductsGrid />
    </AppContainer>
    );
  }
}

export default connect(null, {fetchProductsWithLoading}) (App);
