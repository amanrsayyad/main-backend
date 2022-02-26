import React, { useState , Fragment } from "react";
import { Link } from "react-router-dom";
import "./newHead.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import logo4 from "../../Assets/logo4.png";

const Header = ({ auth: { isAuthenticated, loading }, logout}) => {

  //scroll header logic
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  //header logic
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  //Dropdown logic
  const [show, setShow] = useState(false);

  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  //dropdown css inline
  const myStyle = {
    fontSize: "20px",
    color: "#000",
    zIndex: "1000000",
    textDecoration: "none",
  };

  const authLinks = (
    <Link to="/" onClick={logout}>
        LogOut <i className="fas fa-sign-out-alt"></i>
    </Link>
  )

  const geustLinks = (
    <div className="header_right">
        <div className="header__icons">
    <ul className={click ? "nav-menu active" : "nav-menu"}>
            <Link to="/" onClick={closeMobileMenu}>
              Home
            </Link>
            <Link to="/Gallery" onClick={closeMobileMenu}>
              Gallery
            </Link>
            <Link to="/Aboutus" onClick={closeMobileMenu}>
              About Us
            </Link>
            <Link to="/Dining" onClick={closeMobileMenu}>
              Dining
            </Link>
            <Link to="/Offers" onClick={closeMobileMenu}>
              Offers
            </Link>
            <Link to="/Spa" onClick={closeMobileMenu}>
              Spa
            </Link>
            <Link to="/Activities" onClick={closeMobileMenu}>
              Activities
            </Link>
            <Link to="/Tourism" onClick={closeMobileMenu}>
              Tourism
            </Link>
            <Link to="/">
              <NavDropdown
                title="Book Now"
                id="nav-dropdown-dark-example"
                show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
                className="newDrop"
                style={{ color: "#fff" }}
              >
                <NavDropdown.Item
                  className="drop_link_click"
                  onClick={hideDropdown}
                >
                  <Link
                    to="/Executive"
                    onClick={closeMobileMenu}
                    style={myStyle}
                  >
                    Executive Suite
                  </Link>
                </NavDropdown.Item>
                
                <NavDropdown.Item
                  className="drop_link_click"
                  onClick={hideDropdown}
                >
                  <Link
                    to="/SuperiorKing"
                    onClick={closeMobileMenu}
                    style={myStyle}
                  >
                    Superior King Room
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="drop_link_click"
                  onClick={hideDropdown}
                >
                  <Link
                    to="/SuperiorQueen"
                    onClick={closeMobileMenu}
                    style={myStyle}
                  >
                    Superior Queen Room
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="drop_link_click"
                  onClick={hideDropdown}
                >
                  <Link to="/King" onClick={closeMobileMenu} style={myStyle}>
                    King Room
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="drop_link_click"
                  onClick={hideDropdown}
                >
                  <Link to="/Queen" onClick={closeMobileMenu} style={myStyle}>
                    Queen Room
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="drop_link_click"
                  onClick={hideDropdown}
                >
                  <Link to="/Deluxe" onClick={closeMobileMenu} style={myStyle}>
                    Deluxe Room
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Link>
          </ul>
          </div>
      </div>
  )

  



  return (
    <div className={navbar ? "header scroll" : "header"}>
      <div className="header__left">
        <Link to="/">
          <img src={logo4} alt="" className="header_logo" />
        </Link>
      </div>
      <div className="header_right">
        <div className="header__icons">
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <Fragment>{isAuthenticated ? authLinks : geustLinks}</Fragment>
        </ul>
          <div className="menu_icon" onClick={handleClick}>
            <i className={click ? "fas fa-times x-icon" : "fas fa-bars"} />
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})


export default connect(mapStateToProps, { logout })(Header);
