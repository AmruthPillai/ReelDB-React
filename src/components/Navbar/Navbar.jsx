import React from 'react';

const searchInputStyle = {
  width: 200,
  border: 'none',
  backgroundColor: '#222',
  color: 'white',
};

const Navbar = () => (
  <div className="navbar navbar-dark bg-dark d-flex justify-content-between rounded">
    <h6 className="navbar-brand mb-0 flex-center">
      <i className="material-icons mr-1">local_movies</i>
      ReelDB
    </h6>

    <div className="form-group mb-0">
      <input className="form-control form-control-sm" type="text" placeholder="Search" style={searchInputStyle} />
    </div>
  </div>
);

export default Navbar;
