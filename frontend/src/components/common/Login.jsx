import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { message } from 'antd';
import { Button, Form } from 'react-bootstrap';
import photo1 from '../../images/photo1.png'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput
}
  from 'mdb-react-ui-kit';

const Login = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: '', password: ''
  })

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8001/api/user/login", user);
      if (res.data.success) {
        // Store token and user data
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userData', JSON.stringify(res.data.userData));
  
        message.success('Login successfully');
  
        // Determine the type of user and navigate accordingly
        const { type } = res.data.userData;
  
        // Perform navigation based on the user type
        if (type === "admin") {
          navigate("/adminhome");
        } else if (type === "user") {
          navigate("/userhome");
        } else {
          navigate("/login");
        }
        window.location.reload();
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      message.error('Login failed');
    }
  };


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


    <MDBContainer className="my-5">

<MDBCard style={{ border: 'none', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
  <MDBRow style={{ background: 'rgb(240, 243, 243)' }} className='g-0 p-4'>

    <MDBCol md='6' className="d-flex align-items-center">
      <MDBCardImage src={photo1} alt="login form" className='rounded-start w-100' />
    </MDBCol>

    <MDBCol md='6' className="d-flex align-items-center">
      <MDBCardBody className='d-flex flex-column mx-4'>

        <div className='text-center mb-4'>
          <span className="h3 fw-bold text-primary">Sign in to your account</span>
        </div>

        <Form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="formControlLgEmail">Email</label>
            <MDBInput
              name="email"
              value={user.email}
              onChange={handleChange}
              id="formControlLgEmail"
              type="email"
              size="lg"
              autoComplete='off'
              className="rounded-pill"
            />
          </div>
          <div className="mb-4">
            <label className="form-label" htmlFor="formControlLgPassword">Password</label>
            <MDBInput
              name="password"
              value={user.password}
              onChange={handleChange}
              id="formControlLgPassword"
              type="password"
              size="lg"
              autoComplete='off'
              className="rounded-pill"
            />
          </div>
          <div className="text-center">
            <Button className="mb-3 px-5 btn-dark rounded-pill" size='lg' type='submit'>Login</Button>
          </div>
        </Form>

        <div className="text-center mt-4">
          <p style={{ color: '#6c757d' }}>
            Don't have an account? <Link to={'/register'} className="text-decoration-none text-primary fw-bold">Register here</Link>
          </p>
        </div>

      </MDBCardBody>
    </MDBCol>

  </MDBRow>
</MDBCard>

</MDBContainer>
    </>
  );
}

export default Login;