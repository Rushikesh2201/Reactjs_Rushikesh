import React, { Component } from 'react'
import Form from './form'
// import Navbar from '../Dashboard/navbar'
import Header from '../../common/Header';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { setUser, resetUser } from "./../../../utils/actions";
export class Profile extends Component {
    constructor() {
        super();
        this.state = {
            first_name: "Kiran",
            last_name: "Dhage",
            email: "kiran@test.com"
        }
    }
    render() {
        return (

            <div>
                <Header />
                <Form user={this.props.user.userInfo.loggedUser} />
            </div>
        )
    }
}


export default connect((state) => ({ user: state.user }), {
    setUser,
    resetUser,
})(withRouter(Profile));