import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlassChart} from '@fortawesome/free-solid-svg-icons'


export class Tags extends Component{
    render(){
        return(
            <div className="MainContent">
              <h2 className="Local">
                <FontAwesomeIcon
                  icon={faMagnifyingGlassChart}
                  className="Icon"
                  size="5x"
                />
                Local SEO
              </h2>

              <div className="LocalUrlDiv">
                <h2 className="LocalUrl">URL used for reports</h2>
              </div>

              <div className="LocalParaDiv">
                <p className="LocalPara">
                  TOP 5 KEYWORDS BY PLATFORM (07 - 31 - 2021)
                </p>
              </div>
            </div>
        )
    }
}
export default Tags;
