import React, { Component } from 'react'
import ProfileForm from '../../molecules/ProfileForm'
// import Navbar from '../Dashboard/navbar'
import Header from '../../organisms/Navbar';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { setUser, resetUser } from "./../../../utils/actions";
export class Profile extends Component {
    constructor() {
        super();
        this.state = {}
    }
    updateProfile = (props) =>{
        console.log(props,"ooo")
    }
    render() {
        return (

            <div>
                <Header />
                <ProfileForm user={this.props.user.userInfo.loggedUser} updateProfile={(data)=>this.updateProfile(data) }/>
            </div>
        )
    }
}


export default connect((state) => ({ user: state.user }), {
    setUser,
    resetUser,
})(withRouter(Profile));