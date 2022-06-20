
import React,  { Component } from 'react'
import Styles from '../../css/MonthlyReport/GoogleAds.module.css'
export class GoogleAds extends Component{

render(){
    return(
        <div className={Styles.App2}>
        <h1 className={Styles.Ads}>Google Ads</h1>
        <p className={Styles.AdText}>Previous 30 days</p>
        </div>
    )
}
    
}

export default GoogleAds;

   

