
import React from 'react'
import Styles from '../../css/MonthlyReport/GoogleAds.module.css'

function GoogleAds(props){
    return(
        <div className={Styles.App2}>
        <h1 className={Styles.Ads}>{props.ads}</h1>
        <p className={Styles.AdText}>{props.duration}</p>
        </div>
    )
}
export default GoogleAds;

   

