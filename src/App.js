import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import FooterContainer from './containers/FooterContainer';
import "./styles/main.css";

const App = () => (
    <Container>
        <Row>
            <Col> 
                <Header 
                    src="https://image.shutterstock.com/image-vector/dots-letter-c-logo-design-260nw-551769190.jpg"
                />
            </Col>
        </Row>
        <Row>
            <Col xs={12} sm={6}>       

             </Col>
            <Col xs={12} sm={6}>  
     
            </Col>
        </Row>
        <Row>
            <Col>
               <FooterContainer
                    text="Developed by Kyri Kyriacou"
               />
            </Col>
        </Row>        
    </Container>
);
  
export default App;