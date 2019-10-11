import React from 'react';
import Container from 'react-bootstrap/Container';

import Navbar from '../../components/Navbar/Navbar';
import Router from '../Router';

const App = () => (
  <Container className="mt-5">
    <Navbar />
    <div className="my-5" />
    <Router />
  </Container>
);

export default App;
