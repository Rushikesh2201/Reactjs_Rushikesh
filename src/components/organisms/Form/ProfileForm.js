import React from "react";
import Styles from "./form.module.css";
import ButtonSubmit from "../../atoms/Button/ProfileButton";
import InputField from "../../atoms/FormInput/ProfileInputFields";

function Form() {
  return (
    <div className={Styles.form_div}>
      <div className={Styles.form_container_div}>
        <div className={Styles.form_mainContainer_div}>
          <form className={Styles.form}>
            <label className={Styles.form_label}>
              <InputField
                first_name="Kiran"
                last_name="Dhage"
                email="kiran@example.com"
                Heading1="FirstName:"
                Heading2="LastName:"
                Heading3="Email:"
              />
            </label>

            <ButtonSubmit />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;

// import React from "react";
// import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

// let Forms = (props) => {
//   return (
//     <>
//       <Container className="mt-4" style={{justifyContent:"center", alignItems:"center", backgroundColor : ""}}>
//         <Row>
//           <Col sm={12}>
//             <Card className = "shadow-lg mt-3 mb-3" style={{height : "80vh" , marginRight:1}}>
//               <Card.Body style={{}} >
//                 <Form>

//                   <Form.Group className = "mt-4" style={{alignSelf: "center", width  : "30%" ,marginLeft : "35%", marginRight : "35%"}}>
//                     <Form.Label >FirstName:</Form.Label>
//                     <Form.Control type="text" value={props.first_name} />
//                     </Form.Group>

//                     <Form.Group className="mt-3" style={{width  : "30%" ,marginLeft : "35%", marginRight : "35%"}}>
//                     <Form.Label>LastName:</Form.Label>
//                     <Form.Control type="text" value={props.last_name} />
//                     </Form.Group>

//                     <Form.Group className="mt-3" style={{width  : "30%" ,marginLeft : "35%", marginRight : "35%"}}>
//                     <Form.Label>Email:</Form.Label>
//                     <Form.Control type="text" value={props.email} />
//                   </Form.Group>

//                   <Button variant="warning" className="mt-3" style={{marginLeft : "41%", marginRight : ""}}>
//                     Submit
//                   </Button>
//                 </Form>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default Forms;
