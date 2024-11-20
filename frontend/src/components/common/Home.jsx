import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';


import p3 from '../../images/p3.webp'
import booking from '../../images/booking.png'
import features from '../../images/features.jpeg'

const Home = () => {
  return (
    <>
      <Navbar expand="lg" bg="primary" variant="dark" className="py-3">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="text-white h4 text-decoration-none">
            MedicAid
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link text-white">
              Home
            </Link>
            <Link to="/login" className="nav-link text-white">
              Login
            </Link>
            <Link to="/register" className="nav-link text-white">
              Register
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div className="container-fluid d-flex align-items-center home-container py-5">
      {/* Left Side */}
      <div className="col-md-6 text-center">
        <img 
          alt="Doctor" 
          src={p3} 
          className="img-fluid" 
          style={{ maxHeight: "400px" }} 
        />
      </div>
      
      {/* Right Side */}
      <div className="col-md-6 d-flex flex-column justify-content-center text-start">
        <h1 className="display-5 fw-bold text-primary mb-3">
          Effortlessly schedule your doctor
        </h1>
        <h2 className="fs-4 text-secondary mb-3">
          Appointments with just a few clicks,
        </h2>
        <h3 className="fs-5 text-muted mb-4">
          Putting your health in your hands.
        </h3>
        <div>
          <Button 
            variant="info" 
            size="sm" 
            className="text-white text-uppercase fw-bold px-3"
            style={{ width: "auto" }}
          >
            <Link to="/login" className="text-white text-decoration-none">
              Book Now
            </Link>
          </Button>
        </div>
      </div>
    </div>


    <Container className="py-5">
      <h1 className="text-center mb-5 fw-bold">About Us</h1>

      {/* Section 1 */}
      <Row className="align-items-center mb-5">
        <Col md={6} className="mb-4 mb-md-0">
          <img
            src={booking} 
            alt="Convenient Booking"
            className="img-fluid rounded p-5"
          />
        </Col>
        <Col md={6}>
          <h2 className="mb-3 fw-bold text-primary">Why Choose Us?</h2>
          <ul className="list-unstyled fs-5">
            <li className="mb-3">
              ✅ <b>Effortless Booking</b>: Schedule appointments online from the comfort of your home.
            </li>
            <li className="mb-3">
              ✅ <b>Wide Network</b>: Access a diverse range of qualified doctors and specialists.
            </li>
            <li className="mb-3">
              ✅ <b>Informed Choices</b>: View detailed doctor profiles, specialties, and patient reviews.
            </li>
            <li className="mb-3">
              ✅ <b>Real-Time Availability</b>: Choose from open slots that fit your schedule.
            </li>
            <li className="mb-3">
              ✅ <b>Instant Confirmation</b>: Receive booking confirmations and reminders.
            </li>
          </ul>
        </Col>
      </Row>

      {/* Section 2 */}
      <Row className="align-items-center">
        <Col md={6} className="order-md-2 mb-4 mb-md-0">
          <img
            src={features}
            alt="Advanced Features"
            className="img-fluid rounded-circle p-5"
          />
        </Col>
        <Col md={6} className="order-md-1">
          <h2 className="mb-3 fw-bold text-primary">Our Advanced Features</h2>
          <ul className="list-unstyled fs-5">
            <li className="mb-3">
              ✅ <b>Emergency Options</b>: Same-day and next-day appointments for urgent needs.
            </li>
            <li className="mb-3">
              ✅ <b>Secure Storage</b>: Save medical history and insurance details for quick check-ins.
            </li>
            <li className="mb-3">
              ✅ <b>Flexible Payments</b>: Enjoy seamless online payment options.
            </li>
            <li className="mb-3">
              ✅ <b>24/7 Support</b>: Get assistance anytime from our dedicated support team.
            </li>
            <li className="mb-3">
              ✅ <b>Efficiency & Care</b>: Spend less time scheduling and more time focusing on your health.
            </li>
          </ul>
          <Button
            variant="info" 
            size="sm" 
            className="text-white text-uppercase fw-bold px-3"
            style={{ width: "auto" }}
          >
            Join Us Now
          </Button>
        </Col>
      </Row>
    </Container>



    </>
  )
}

export default Home
