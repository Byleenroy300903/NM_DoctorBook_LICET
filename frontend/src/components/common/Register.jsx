import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { message } from 'antd'
import p2 from '../../images/p2.png'
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBRadio,
}
  from 'mdb-react-ui-kit';
import axios from 'axios';

const Register = () => {

  const navigate = useNavigate()
  const [user, setUser] = useState({
    fullName: '', email: '', password: '', phone: '', type: ''
  })

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:8001/api/user/register', user)
      if (res.data.success) {
        message.success('Registered Successfully')
        navigate('/login')
      }
      else {
        message.error(res.data.message)
      }
    } catch (error) {
      console.log(error)
      message.error('Something went wrong')
    }
  }

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
      <MDBCardBody className='d-flex flex-column mx-4'>

        <div className='text-center mb-4'>
          <span className="h3 fw-bold text-primary">Sign up to your account</span>
        </div>

        <Form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="formControlLgFullName">Full Name</label>
            <MDBInput
              name='fullName'
              value={user.fullName}
              onChange={handleChange}
              id='formControlLgFullName'
              type='text'
              size="lg"
              className="rounded-pill"
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="formControlLgEmail">Email</label>
            <MDBInput
              name='email'
              value={user.email}
              onChange={handleChange}
              id='formControlLgEmail'
              type='email'
              size="lg"
              className="rounded-pill"
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="formControlLgPassword">Password</label>
            <MDBInput
              name='password'
              value={user.password}
              onChange={handleChange}
              id='formControlLgPassword'
              type='password'
              size="lg"
              className="rounded-pill"
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="formControlLgPhone">Phone</label>
            <MDBInput
              name='phone'
              value={user.phone}
              onChange={handleChange}
              id='formControlLgPhone'
              type='tel'
              size="lg"
              className="rounded-pill"
            />
          </div>

          <Container className="my-3 text-center">
            <MDBRadio
              name='type'
              id='inlineRadio1'
              checked={user.type === 'admin'}
              value='admin'
              onChange={handleChange}
              label='Admin'
              inline
              className="mx-2"
            />
            <MDBRadio
              name='type'
              id='inlineRadio2'
              checked={user.type === 'user'}
              value='user'
              onChange={handleChange}
              label='User'
              inline
              className="mx-2"
            />
          </Container>

          <div className="text-center">
            <Button className="mb-3 px-5 btn-dark rounded-pill" variant='dark' size='lg' type="submit">Register</Button>
          </div>
        </Form>

        <div className="text-center mt-4">
          <p style={{ color: '#6c757d' }}>
            Have an account? <Link to={'/login'} className="text-decoration-none text-primary fw-bold">Login here</Link>
          </p>
        </div>

      </MDBCardBody>
    </MDBCol>

    <MDBCol md='6' className="d-flex align-items-center">
      <MDBCardImage src={p2} alt="register form" className='rounded-start w-100' style={{ mixBlendMode: 'darken' }} />
    </MDBCol>

  </MDBRow>
</MDBCard>

</MDBContainer>
    </>
  )
}

export default Register
