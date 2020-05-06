
import React from "react";
import Popup from "reactjs-popup";

// Importing bootstrap code
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';



const CustomPopup = () => {
 return <Popup trigger={<Button className="button"> Open Modal </Button>} modal>
    {close => (
      <div>
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="header"> Modal Title </div>
        <div className="content">
          {" "}
  I am Test modal content.
        </div>
        <div className="actions">
<Container>

  <Row className="justify-content-md-center">
    <Col xs lg="2"><Popup
            trigger={<Button className="button"> Trigger </Button>}
            position="top center"
            closeOnDocumentClick
          >
            <span>
            I have been opened by Trigger button click!
            </span>
          </Popup></Col>
    <Col md="auto"> <Button
            className="button"
            onClick={() => {
              console.log("modal closed ");
              close();
            }}
          >
            Close
          </Button></Col>
  </Row>
</Container>
          
         
        </div>
      </div>
    )}
  </Popup>;
};

export default CustomPopup;