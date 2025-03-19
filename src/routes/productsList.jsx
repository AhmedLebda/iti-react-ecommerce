import { useLoaderData } from "react-router-dom";
import { getProducts } from "../api/api";
import ProductCard from "../components/productCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomPagination from "../components/pagination";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  const page = searchParams.get("page") || 0;
  const response = await getProducts(page);
  const { products, limit, skip, total } = response;
  return { products, limit, skip, total };
};

const ProductsList = () => {
  const { products, total, limit } = useLoaderData();
  return (
    <Container>
      <h1 className="mb-5">Products List</h1>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {products.map((product) => (
          <Col key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
      <div className="mt-5 d-flex justify-content-center">
        <CustomPagination totalProducts={total} limit={limit} />
      </div>
    </Container>
  );
};

export default ProductsList;
