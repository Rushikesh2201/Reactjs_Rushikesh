import React, {Component} from 'react'
import Form from './form'
import Navbar from '../Dashboard/navbar'

export class main extends Component {
    constructor(){
        super();
        this.state = {
            first_name : "Kiran",
            last_name : "Dhage",
            email : "kiran@test.com" 
        }
    }
    render(){
        return(
            
            <div>
                <div>
                <Navbar />

            </div>
                <Form 
                first_name = "Kiran"
                last_name = "Dhage"
                email = "kiran@test.com" 
                />
            </div>
        )
    }
}
   
   

export default main;