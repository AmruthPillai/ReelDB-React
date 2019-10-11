import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom';
import MovieDirectory from './MovieDirectory/MovieDirectory';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/movies">
        <MovieDirectory />
      </Route>
      <Route exact path="/">
        <Redirect to="/movies" />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
