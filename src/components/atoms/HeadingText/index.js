
import React from 'react'
import Styles from './style.module.css'

function CustomTitleH1(props) {
    return (
        <div className={Styles.App2}>
            {props.ads && <h1 className={Styles.Ads}>{props.ads}</h1>}
        </div>
    )
}
export default CustomTitleH1;



