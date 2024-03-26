import React from 'react';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-0">
      <div className="d-flex justify-content-between w-100">
        <div className="flex-row d-flex">
        <img
            src="/Images/Picture4.png"
            alt="Logo"
            className='logo'
            style={{ height: '75px' }} // Inline style for the logo height
          />
          <button
            type="button"
            className="navbar-toggler mr-2"
            data-toggle="offcanvas"
            title="Toggle responsive left sidebar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsingNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>


      {/* <div className="navbar-collapse collapse" id="collapsingNavbar">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              Link
            </a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="" data-toggle="collapse">
              Profile
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="" data-target="#myModal" data-toggle="modal">
              About
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="" data-target="#myModal" data-toggle="modal">
              User
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link waves-effect waves-light text-white">
              <i className="fab fa-google-plus-g"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link waves-effect waves-light text-white">
              <i className="fas fa-envelope-open-text"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link waves-effect waves-light text-white">
              <i className="fas fa-align-justify"></i>
            </a>
          </li>
        </ul>
      </div> */}
    </nav>
  );
};

export default Navbar;
