import React from 'react';
import LOGO from "../../assets/Group 1.png"; // Correct the path to your image file

function Header() {
  return (
    <> 
      <nav  className="navbar navbar-expand-lg navbar-light fontsfamilt fw-bold">
        <div className="container">
          {/* Corrected the img tag */}
          <img src={LOGO} alt="logo" /> 

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" style={{ borderBottom: '2px solid #EF8D21' }} href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact US</a>
              </li>
            </ul>
            <form className="d-flex ">
            <li className="nav-item list-unstyled mx-5  ">
                <a className="nav-link  fw-bold mt-2" href="#">Log in</a>
              </li>
              <button className="btn  rounded-5 text-color-white" type="submit"  style={{ backgroundColor: '#EF8D21 ', border:"none", color:"#ffffff" }} >Book Scooter</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
