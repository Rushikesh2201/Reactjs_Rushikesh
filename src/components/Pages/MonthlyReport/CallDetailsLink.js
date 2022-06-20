
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Styles from '../../css/MonthlyReport/CallDetailsLink.module.css'

export class CallDetailsLink extends Component{
    render(){
        return(
            <div className= {Styles.Link}>
            <Link to="/call" >Call Details</Link>
            </div>
        )
    }
}

export default CallDetailsLink;