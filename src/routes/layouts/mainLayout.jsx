import { Outlet } from "react-router-dom";
import CustomNavBar from "../../components/customNavbar";
import { Container } from "react-bootstrap";
import Footer from "../../components/footer";
import { Suspense } from "react";
import Spinner from "react-bootstrap/Spinner";
const MainLayout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <CustomNavBar />
      <Container className="mt-5 flex-grow-1">
        <Suspense
          fallback={
            <div className="d-flex justify-content-center mt-5">
              <Spinner animation="border" variant="dark" />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </Container>
      <Footer />
    </div>
  );
};

export default MainLayout;
