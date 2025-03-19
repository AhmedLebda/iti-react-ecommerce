import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";

const textTruncate_3 = {
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 3,
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxHeight: "5rem",
};

const textTruncate_1 = {
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 1,
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxHeight: "2rem",
};

const ProductCard = ({ product }) => {
  const { id, description, thumbnail, price, stock, title } = product;
  const dispatch = useDispatch();
  return (
    <Card className="text-decoration-none">
      <Link to={`/${id}`}>
        <Card.Img variant="top" src={thumbnail} />
      </Link>
      <Card.Body>
        <Card.Title style={textTruncate_1} className="fw-bold">
          {title}
        </Card.Title>
        <Card.Text style={textTruncate_3}>{description}</Card.Text>
        <hr />

        <div className="d-flex justify-content-between align-items-center">
          <Card.Text>Price: ${price}</Card.Text>

          <Badge bg={`${stock ? "dark" : "danger"}`}>
            {stock ? `stock: ${stock}` : "out of stock"}
          </Badge>
        </div>
        <Button
          variant="success"
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
          Add To Card
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
