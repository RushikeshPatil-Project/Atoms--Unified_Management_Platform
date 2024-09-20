

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
//import Fade from 'react-reveal/Fade';
import './Testimonials.css';
const Testimonials = () => {
  return (
    <Container className="mt-5">
      <h2>Success Stories</h2>
      <Row>
        <Col md={4}>
      
            <Card>
              <Card.Body>
                <Card.Text>
                "The Institute Management System has transformed how we manage our academic processes. 
                The quiz management feature is particularly impressive, making assessments easier and more insightful. 
                Highly recommend it to any educational institution."
                </Card.Text>
                <Card.Footer>
                  <small className="text-muted">- John Doe, Principal at Springfield High School</small>
                </Card.Footer>
              </Card.Body>
            </Card>
     
        </Col>
        <Col md={4}>
        
            <Card>
              <Card.Body>
                <Card.Text>
                "Using the IMS has been a game-changer for my classes. 
                The notes management and assignment submission features have streamlined my workflow, and the students love the easy access to their materials."
                </Card.Text>
                <Card.Footer>
                  <small className="text-muted">- Jane Smith, Teacher at Riverview Academy</small>
                </Card.Footer>
              </Card.Body>
            </Card>
     
        </Col>
        <Col md={4}>
   
            <Card>
              <Card.Body>
                <Card.Text>
                "As a student, the weekly timetable feature has been a lifesaver. It keeps me organized and ensures I never miss a quiz or assignment deadline. 
                The platform is user-friendly and efficient."
                </Card.Text>
                <Card.Footer>
                  <small className="text-muted">- Michael Johnson, Student at Greenwood University</small>
                </Card.Footer>
              </Card.Body>
            </Card>
          
        </Col>
      </Row>
    </Container>
  );
}

export default Testimonials;
