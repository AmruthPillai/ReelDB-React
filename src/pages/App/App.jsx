import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from '../../components/Navbar/Navbar';
import MovieDirectory from '../MovieDirectory/MovieDirectory';

const App = () => (
  <Container className="mt-5">
    <Navbar />

    <div className="my-5" />

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
  </Container>
);

export default App;
