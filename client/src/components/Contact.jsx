import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Contact() {
  return (
    <Container fluid="md"  >
    <Row>
      <Col><Button variant="primary">Primary</Button></Col>
      <Col><Button variant="secondary">Secondary</Button></Col>
      <Col><Button variant="success">Success</Button></Col>
      <Col><Button variant="link">Link</Button></Col>
     
    </Row>
  </Container>
  )
}

export default Contact