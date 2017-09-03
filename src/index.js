import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router'
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <App>
        <Route path='/' component={()=>{}} />  
        <Switch>
          <Route path='/series/' component={()=>{}} />
          <Route path='/series/alphabetical' component={()=>{}} />
          <Route path='/series/category' component={()=>{}} />
          <Route path='/series/calendar' component={()=>{}} />
          <Route path='/series/:id' component={()=>{}} />
          <Route path='/series/:id/season/:season' component={()=>{}} />
          <Route path='/series/:id/season/:season/episode/:episode' component={()=>{}} />
          <Route path='/series/favorites' component={()=>{}} />
          <Route path='/series/watched' component={()=>{}} />

          <Route path='/movies/' component={()=>{}} />
          <Route path='/movies/alphabetical' component={()=>{}} />
          <Route path='/movies/category' component={()=>{}} />
          <Route path='/movies/:id' component={()=>{}} />
          <Route path='/movies/favorites' component={()=>{}} />
          <Route path='/movies/watched' component={()=>{}} />
        </Switch>
      </App>
    </Router>
  </Provider>
  , document.querySelector('.container'));
