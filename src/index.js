import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, Switch } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import createBrowserHistory from 'history/createBrowserHistory'

import App from './app'
import rootReducer from './reducers.js'

const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <Router history={createBrowserHistory()}>
      <App>
        <Route name='/' path='/' component={()=>{}} />
        <Switch>
          <Route name='series' path='/series/' component={()=>{}} />
          <Route name='series-alphabetical' path='/series/alphabetical' component={()=>{}} />
          <Route name='series-category' path='/series/category' component={()=>{}} />
          <Route name='series-calendar' path='/series/calendar' component={()=>{}} />
          <Route name='serieName' path='/series/:id' component={()=>{}} />
          <Route name='serieAndSeason' path='/series/:id/season/:season' component={()=>{}} />
          <Route name='serieSeasonAndEpisode' path='/series/:id/season/:season/episode/:episode' component={()=>{}} />
          <Route name='series-favorites' path='/series/favorites' component={()=>{}} />
          <Route name='series-watched' path='/series/watched' component={()=>{}} />

          <Route name='movies' path='/movies/' component={()=>{}} />
          <Route name='movies-alphabetical' path='/movies/alphabetical' component={()=>{}} />
          <Route name='movies-category' path='/movies/category' component={()=>{}} />
          <Route name='movieName' path='/movies/:id' component={()=>{}} />
          <Route name='movies-favorites' path='/movies/favorites' component={()=>{}} />
          <Route name='movies-watched' path='/movies/watched' component={()=>{}} />
        </Switch>
      </App>
    </Router>
  </Provider>
  , document.querySelector('.container'));
