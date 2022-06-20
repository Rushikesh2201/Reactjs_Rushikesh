
import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePhone } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Styles from '../../css/CallDetails/Heading.module.css'

export class Heading extends Component{
    render(){
        return(
        <div className="content">
          <FontAwesomeIcon
            icon={faSquarePhone}
            className={Styles.IconCall}
            size="7x"
            color="orange"
          />
          <div className={Styles.Heading}>
            <h1 class={Styles.HeadingCall}>Calls</h1>

            <small className={Styles.date}>
              <p className={Styles.Text}>FROM</p>
              <p>07- 01-2021</p>

              <FontAwesomeIcon
                icon={faArrowRight}
                color="orange"
                className={Styles.IconArrow}
                size=""
              />

              <p className={Styles.Text}>TO </p>
              <p>07 - 31 - 2021</p>
            </small>
          </div>
          </div>
        )
    }
}
export default Heading;