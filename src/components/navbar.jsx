import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './css/navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div
      className="shadow-sm bg-body rounded"
      style={{ backgroundColor: "#ffffff" }}
    >
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        style={{ backgroundColor: "#BF9270" }}
      >
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
              </li>
              <li className="nav-item">
                <Link to={"/about"} className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/posting"} className="nav-link">
                  Posting
                </Link>
              </li>
            </ul>
            <span className="navbar-text">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  {/* <a className="nav-link active" aria-current="page" href="">  */}
                  {/* <i className="fa-solid fa-right-from-bracket"></i> */}
                  <button onClick={handleLogout} className="nav-link">
                    Logout
                  </button>
                  {/* </a> */}
                </li>
              </ul>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
