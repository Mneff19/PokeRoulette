import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, Switch } from 'react-router-dom';
import ReduxThunk from 'redux-thunk';

import App from './components/app'
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));

// import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';

import history from './history';
import MainPage from './components/mainpage';
import HomePage from './components/homepage';

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Switch>
        <Route path='/' exact component={HomePage}/>
          <Route path='/roulette' component={MainPage}/>
          <App />
        </Switch>
      </Router>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
