import React, { Component } from 'react';
import LoggedUser from '../containers/logged_user';
import Header from './header';
import ProductsGrid from '../containers/products_grid';
import styled from 'styled-components';
import Toast from '../containers/toast'

import Loading from './loading';

const AppContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  position: relative;
`;


class App extends Component {

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

export default App;
