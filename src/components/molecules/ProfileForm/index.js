import React from "react";
import Styles from "./style.module.css"
import ButtonSubmit from "./../../atoms/Buttons/button"
const ProfileForm = (props) => {
    return (
        <div className={[Styles.form_div, "col-md-6 m-auto"].join(' ')}>
            <div className={Styles.form_container_div}>
                <div className={Styles.form_mainContainer_div}>
                    <form >
                        <label className={Styles.form_label}>

                            <h1 className={Styles.text}>First Name: </h1>
                            <input type="text" name="name" disabled value={props.user.firstName} className={Styles.textInput} /> <br />

                            <h1 className={Styles.text}> Last Name: </h1>
                            <input type="text"  name="name" disabled value={props.user.lastName} className={Styles.textInput} /> <br />

                            <h1 className={Styles.textEmail}>Email:</h1>
                            <input type="email" name="name" defaultValue={props.user.email} className={Styles.textInput} disabled /> <br />

                        </label>
                        <ButtonSubmit disabled onClick={()=>console.log(props.user)}/>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProfileForm;