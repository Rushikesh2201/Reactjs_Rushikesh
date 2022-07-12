import React from "react";
import Styles from "./css/form.module.css"

function Form(props){
  
return(
    <div className= {Styles.form_div}>
        <div className= {Styles.form_container_div}>
            <div className ={Styles.form_mainContainer_div}>
    <form className={Styles.form}> 
      <label className = {Styles.form_label}>
       
        <h1 className = {Styles.text}>FirstName: </h1>
        <input type="text" name="name"  value = {props.first_name} className= {Styles.textInput}/> <br/>
        
        <h1 className = {Styles.text}> LastName: </h1>
        <input type="text" name="name" value = {props.last_name}  className= {Styles.textInput}/> <br/>
        
        <h1 className = {Styles.textEmail}>Email:</h1>
        <input type="email" name="name" value = {props.email} className= {Styles.textInput}/> <br/>
      
      </label>
    
      <input type="submit" value="Submit" className = {Styles.button} />
    
    </form>
    </div>
    </div>
    </div>
)
    }

    export default Form;