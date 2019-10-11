import React from 'react';
import {
  HashRouter,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom';
import MovieDirectory from './MovieDirectory/MovieDirectory';

const Router = () => (
  <HashRouter>
    <Switch>
      <Route path="/movies">
        <MovieDirectory />
      </Route>
      <Route exact path="/">
        <Redirect to="/movies" />
      </Route>
    </Switch>
  </HashRouter>
);

export default Router;
