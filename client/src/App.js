import './App.css';

import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import { Navbar } from './components/layout';
import {
  StreamCreate,
  StreamDestroy,
  StreamEdit,
  StreamIndex,
  StreamShow
} from './components/stream';

import history from './history';

import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const App = () => (
  <Provider
    store={createStore(reducers, composeEnhancers(applyMiddleware(thunk)))}
  >
    <Router history={history}>
      <>
        <Navbar />
        <div className='section'>
          <div className='container'>
            <Switch>
              <Route component={StreamIndex} exact path='/' />
              <Route component={StreamCreate} exact path='/create' />
              <Route component={StreamDestroy} exact path='/destroy/:id' />
              <Route component={StreamEdit} exact path='/edit/:id' />
              <Route component={StreamShow} exact path='/:id' />
            </Switch>
          </div>
        </div>
      </>
    </Router>
  </Provider>
);

export default App;
