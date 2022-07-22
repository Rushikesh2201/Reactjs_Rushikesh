import React, { Component } from 'react'
import ProfileForm from '../../molecules/ProfileForm'
// import Navbar from '../Dashboard/navbar'
import Header from '../../common/Header';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { setUser, resetUser } from "./../../../utils/actions";
export class Profile extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (

            <div>
                <Header />
                <ProfileForm user={this.props.user.userInfo.loggedUser} />
            </div>
        )
    }
}


export default connect((state) => ({ user: state.user }), {
    setUser,
    resetUser,
})(withRouter(Profile));