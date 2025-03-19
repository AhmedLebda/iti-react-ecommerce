import { ShoppingCart } from "lucide-react";
import { Badge } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import LanguageDropdown from "./languageDropdown";
const CustomNavBar = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          E-Commerce
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-4">
            <Nav.Link as={NavLink} to="/">
              Products
            </Nav.Link>
            <Nav.Link as={NavLink} to="/register">
              Register
            </Nav.Link>
            <Nav.Link as={NavLink} to="/cart" className="position-relative">
              <ShoppingCart />
              <Badge
                bg="danger"
                className="position-absolute top-10 start-100 translate-middle p-1"
              >
                {cart.length}
              </Badge>
            </Nav.Link>
            <LanguageDropdown />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavBar;
