import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Row, Col, Form, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/style.css";

function Start() {
  const navigate = useNavigate();

  return (
    <Container fluid className="vh-100 loginPage">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 className="heading text-white">Blitz HRMS</h1>
        <p className="sub-heading text-white">
          Information <br />
          Management <br />
          System
        </p>
      </div>

      <Row className="main justify-content-center align-items-center">
        <Col md={5} className="p-4 text-center">
          <Form>
            <Row className="mb-3">
              <Col>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => navigate("/employeeLogin")}
                >
                 HRMS
                </Button>
              </Col>
              <Col>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => navigate("/accounts")}
                >
                  Accounts
                </Button>
              </Col>
              <Col>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => navigate("/learning")}
                >
                  LMS
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>

      {/* Footer */}
      <footer className="footer">
        <Container fluid>
          <Row>
            <Col>
              <p className="text-white">
                Blitz Learning Technologies Information Management System
                <br />
                Developed by Blitz Learning Technologies Pvt. Ltd.
              </p>
            </Col>
            <Col className="text-right">
            <Image src="/Images/Picture4.png" alt="Logo" />
            </Col>
          </Row>
        </Container>
      </footer>
    </Container>
  );
}

export default Start;
