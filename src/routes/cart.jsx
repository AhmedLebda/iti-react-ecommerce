import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../store/slices/cartSlice";
import {
  Card,
  Button,
  ListGroup,
  Badge,
  Container,
  Row,
  Col,
  Image,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const calculateTotalPrice = cart.reduce((acc, curr) => {
    console.log(acc + curr.price * curr.quantity);
    return acc + curr.price * curr.quantity;
  }, 0);

  if (!cart.length) {
    return (
      <Container>
        <Row>
          <Col>
            <h2 className="text-center">Your cart is empty.</h2>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col sm={12} xl={8}>
          <Card className="shadow-sm">
            <Card.Header className="bg-dark text-white p-3">
              <h4 className="mb-0 d-flex align-items-center">
                Shopping Cart
                <Badge bg="light" text="dark" className="ms-auto">
                  {cart.length} items
                </Badge>
              </h4>
            </Card.Header>

            <ListGroup variant="flush">
              {cart.map((item) => (
                <ListGroup.Item key={item.id} className="py-3">
                  <Row className="align-items-center">
                    <Col xs={2}>
                      <Image src={item.thumbnail} rounded fluid />
                    </Col>
                    <Col xs={4}>
                      <h6 className="mb-1 fw-bold fs-5">{item.title}</h6>
                      <small className="text-muted">
                        ${item.price.toFixed(2)}
                      </small>
                    </Col>
                    <Col xs={3}>
                      <div className="d-flex align-items-center">
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          className="me-2"
                          onClick={() => dispatch(decreaseQuantity(item))}
                        >
                          -
                        </Button>
                        <span>{item.quantity}</span>
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          className="ms-2"
                          onClick={() => dispatch(increaseQuantity(item))}
                        >
                          +
                        </Button>
                      </div>
                    </Col>
                    <Col xs={3} className="text-end">
                      <strong>
                        ${(item.price * item.quantity).toFixed(2)}
                      </strong>
                      <Button
                        variant="link"
                        className="text-danger text-decoration-none ps-2"
                        onClick={() => dispatch(removeFromCart(item))}
                      >
                        ×
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>

            <Card.Footer className="bg-light">
              <Row className="align-items-center mb-3">
                <Col xs={6}>
                  <h5 className="mb-0">Total:</h5>
                </Col>
                <Col xs={6} className="text-end">
                  <h5 className="mb-0">${calculateTotalPrice.toFixed(2)}</h5>
                </Col>
              </Row>
              <Button
                variant="success"
                size="lg"
                className="w-100"
                onClick={() => navigate("/")}
              >
                Proceed to Checkout
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
