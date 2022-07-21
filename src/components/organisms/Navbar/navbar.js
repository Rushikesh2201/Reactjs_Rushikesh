import React from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import Styles from "./navbar.module.css";
import logo from "../../../assets/svg/nav_logo2.png";
import profile from "../../pages/Profile/main";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

function Nav_bar() {
  return (
    <Navbar collapseOnSelect expand= "lg" className={Styles.nav_container}>
      <Container>
        <img src={logo} alt="" width="5%" className={Styles.img} />
        <Navbar.Brand href="#home" className={Styles.leadsText}>
          Leads Near Me
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className={Styles.responsive_navbar_nav}
        />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className={Styles.collaps_nav}
        >
          <Nav className={Styles.dropdown_nav}>
            <Nav.Link href="#Home" className={Styles.Home_nav}>
              Home
            </Nav.Link>

            <FontAwesomeIcon icon={faGear} size="1x" className={Styles.Icon} />

            <NavDropdown
              className={Styles.dropdown}
              id={Styles["basic-nav-dropdown"]}
            >
              <NavDropdown.Item
                onClick={profile}
                className={Styles.dropdown_content}
              >
                <Link to="/profile" className={Styles.link_dropdown}>
                  Profile
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className={Styles.dropdown_content}>
                <Link to="/" className={Styles.link_dropdown}>
                  Logout
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav_bar;
