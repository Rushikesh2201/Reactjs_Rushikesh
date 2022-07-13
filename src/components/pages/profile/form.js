import React from "react";
import Styles from "./css/index.module.css"

function Form(props) {
    return (
        <div className={[Styles.form_div, "col-md-6 m-auto"].join(' ')}>
            <div className={Styles.form_container_div}>
                <div className={Styles.form_mainContainer_div}>
                    <form >
                        <label className={Styles.form_label}>

                            <h1 className={Styles.text}>FirstName: </h1>
                            <input type="text" disabled name="name" defaultValue={props.user.firstName} className={Styles.textInput} /> <br />

                            <h1 className={Styles.text}> LastName: </h1>
                            <input type="text" disabled name="name" defaultValue={props.user.lastName} className={Styles.textInput} /> <br />

                            <h1 className={Styles.textEmail}>Email:</h1>
                            <input type="email" name="name" defaultValue={props.user.email} className={Styles.textInput} disabled /> <br />

                        </label>

                        {/* <input type="submit" value="Submit" className={Styles.button} /> */}

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form;