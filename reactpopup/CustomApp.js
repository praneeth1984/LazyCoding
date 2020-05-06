import React from 'react'; 

//importing custom popup component
import CustomPopup from "./CustomPopup.js";

//Bootstrap importing
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
 

function CustomApp() {
  return (     
    <Container className="openModal">
    <Row className="justify-content-md-center">
      <Col>
        <CustomPopup/>
      </Col>
    </Row>
  </Container>       
  );
}

export default CustomApp;
