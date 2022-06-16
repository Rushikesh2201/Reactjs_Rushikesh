
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export class CallDetailsLink extends Component{
    render(){
        return(
            <div className= "Link">
            <Link to="/call" >Call Details</Link>
            </div>
        )
    }
}

export default CallDetailsLink;