import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              We are a leading e-commerce platform providing a wide range of
              products at competitive prices.
            </p>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>
              Email: support@ecommerce.com
              <br />
              Phone: +123 456 7890
            </p>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <p>
              <a href="#" className="text-white me-2">
                Facebook
              </a>
              <a href="#" className="text-white me-2">
                Twitter
              </a>
              <a href="#" className="text-white">
                Instagram
              </a>
            </p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p>
              &copy; {new Date().getFullYear()} E-Commerce. All rights reserved
              by Ahmed Lebda.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
