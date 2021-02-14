import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import AddOrder from './components/AddOrder/AddOrder';
import AddRetail from './components/AddRetail/AddRetail';
import Header from './components/Header/Header';
import OrdersContainer from './components/Orders/OrdersContainer';
import RetailsContainer from './components/Retails/RetailsContainer';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="wrapper-content">
        <Route path='/orders'
          render={() => <OrdersContainer />} />
        <Route path='/retails'
          render={() => <RetailsContainer />} />

        <Route path='/add-retail'
          render={() => <AddRetail />} />
        <Route path='/add-order'
          render={() => <AddOrder />} />

      </div>

    </div>
  );
}

export default App;
