import React from "react";
import { useLoaderData } from "react-router-dom";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { getProductById } from "../api/api";
import Badge from "react-bootstrap/Badge";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }) {
  const product = await getProductById(params.productId);
  return { product };
}

const ProductDetail = () => {
  const { product } = useLoaderData();
  const { id, description, thumbnail, price, stock, title } = product;
  const dispatch = useDispatch();

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Container className="mt-5" id={id}>
      <Row>
        <Col md={5} className="border d-flex justify-content-center rounded-3">
          <Image src={thumbnail} fluid />
        </Col>

        <Col
          md={6}
          className="d-flex flex-column justify-content-center gap-3 offset-md-1"
        >
          <h1>{title}</h1>
          <p>{description}</p>
          <Badge bg="dark" className="p-2 align-self-start">
            Stock: {stock}
          </Badge>
          <h3 className="text-muted">${price}</h3>
          <Button
            variant="success"
            className="align-self-start"
            onClick={() =>
              dispatch(
                addToCart({
                  id,
                  description,
                  thumbnail,
                  price,
                  title,
                  quantity: 1,
                })
              )
            }
          >
            Add to Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
