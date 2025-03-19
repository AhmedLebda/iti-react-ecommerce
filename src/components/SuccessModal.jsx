import { Modal, Button } from "react-bootstrap";

const SuccessModal = ({ show, handleClose, formData }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Registration Successful!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Submitted Information:</h5>
        {formData && (
          <div>
            <p>
              <strong>Name:</strong> {formData.name}
            </p>
            <p>
              <strong>Email:</strong> {formData.email}
            </p>
            <p>
              <strong>Username:</strong> {formData.username}
            </p>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SuccessModal;
