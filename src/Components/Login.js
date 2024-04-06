import React, { Component } from "react";
import { Modal, Form } from 'react-bootstrap';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errormsg: 'Invalid username or password',
    };
  }

  render() {
    const { show, handleClose, handleShowRegister } = this.props;

    return (
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className='p-3'>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.props.loginhandler}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="Email"
                pattern="[a-z0-9._%+-]+@gmail.com" // Pattern to match gmail.com
                title="Please enter a valid Gmail address"
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="Password"
                minLength="8" // Minimum length of 8 characters
                placeholder="Password"
                required
              />
              <label htmlFor="" style={{color : 'red'}} className="m-1">{this.props.validation}</label>
            </Form.Group>
            <button className="btn btn-primary m-2" type="submit">
              Login
            </button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <p>
            Don't have an account?{' '}
            <a href="#" onClick={handleShowRegister}>
              Register
            </a>
          </p>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default Login;
