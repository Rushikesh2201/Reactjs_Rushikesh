import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlassChart} from '@fortawesome/free-solid-svg-icons'
import Styles from '../../css/MonthlyReport/Tags.module.css'

export class Tags extends Component{
    render(){
        return(
            <div className={Styles.MainContent}>
              
                <FontAwesomeIcon
                  icon={faMagnifyingGlassChart}
                  className={Styles.Icon}
                  size="10x"
                />
                <h2 className={Styles.Local}>
                Local SEO
              </h2>

              <div className={Styles.LocalUrlDiv}>
                <h2 className={Styles.LocalUrl}>URL used for reports</h2>
              </div>

              <div className={Styles.LocalParaDiv}>
                <p className={Styles.LocalPara}>
                  TOP 5 KEYWORDS BY PLATFORM (07 - 31 - 2021)
                </p>
              </div>
            </div>
        )
    }
}
export default Tags;
