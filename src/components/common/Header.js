import React from "react";
import Styles from "./css/header.module.css";
import logo from "../../assets/svg/logo.png";
// import profile from "../Profile/form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setUser, resetUser } from "./../../utils/actions";

const Header = (props) => {

    return (
        <nav className="navbar navbar-expand-md navbar-dark" id="banner">
            {console.log(props)}
            <div className="container-fluid p-0">
                {/* <!-- Brand --> */}
                <a className="navbar-brand" href="/dashboard">
                    <img src={logo} className={Styles.Icon} alt="brandLogo" />
                </a>

                {/* <!-- Toggler/collapsibe Button --> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* <!-- Navbar links --> */}
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/dashboard">Dashboard</a>
                        </li>
                        {/* <!-- Dropdown --> */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                <FontAwesomeIcon icon={faGear} size="1x" />
                            </a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="/profile">Profile</a>
                                <a className="dropdown-item" href="/" onClick={() => {
                                    props.setUser({
                                        userInfo: {},
                                    });
                                }}>Logout</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default connect((state) => ({ user: state.user }), {
    setUser,
    resetUser,
})(withRouter(Header));