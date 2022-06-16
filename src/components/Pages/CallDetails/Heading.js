
import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePhone } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export class Heading extends Component{
    render(){
        return(
        <div className="content">
          <FontAwesomeIcon
            icon={faSquarePhone}
            className="IconCall"
            size="7x"
            color="orange"
          />
          <div className="Heading">
            <h1 class="HeadingCall">Calls</h1>

            <small className="date">
              <p className="Text">FROM</p>
              <p>07- 01-2021</p>

              <FontAwesomeIcon
                icon={faArrowRight}
                color="orange"
                className="IconArrow"
                size=""
              />

              <p className="Text">TO </p>
              <p>07 - 31 - 2021</p>
            </small>
          </div>
          </div>
        )
    }
}
export default Heading;