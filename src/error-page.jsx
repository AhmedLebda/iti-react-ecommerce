import React from "react";
import { useRouteError, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Container
      id="error-page"
      className="min-vh-100 d-flex justify-content-center align-items-center text-center"
    >
      <div>
        <h1 className="fs-1 fw-bold">Oops!</h1>
        <p className="fs-4">Sorry, an unexpected error has occurred.</p>
        <p>{error.statusText || error.message}</p>
        <Link to="/" className="btn btn-primary mt-3">
          Go to Home page
        </Link>
      </div>
    </Container>
  );
}
