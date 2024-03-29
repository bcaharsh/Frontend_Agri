import React, { useState } from 'react';
import { Modal, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

function Registration({ show, handleClose, handleShowLogin, handler }) {
  const [formData, setFormData] = useState({
    Name: '',
    Phone_Number: '',
    Email: '',
    Password: '',
  });
  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Reset the validation error when the user starts typing
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const { Name, Phone_Number, Email, Password } = formData;
  
    const errors = {};
  
    if (Name.length > 30) {
      errors.Name = 'Name must be less than 30 characters.';
    }
  
    if (Password.length < 8 || !/\d/.test(Password)) {
      errors.Password =
        'Password must be at least 8 characters long and contain at least one number.';
    }
  
    if (!/^\d{10}$/.test(Phone_Number)) {
      errors.Phone_Number = 'Phone number must have 10 digits.';
    }
  
    if (!Email.endsWith('@gmail.com')) {
      errors.Email = 'Email must be in the format example@gmail.com.';
    }
  
    if (Object.keys(errors).length === 0) {
      const data = { Name, Phone_Number, Email, Password };
  
      axios.post('http://127.0.0.1:8000/apipost/', data)
        .then(response => {
          console.log(response);
          // Reset the form after successful submission
          setFormData({
            Name: '',
            Phone_Number: '',
            Email: '',
            Password: ''
          });
        })
        .catch(error => {
          console.log(error);
          // Handle errors if submission fails
        });
        window.location.reload();
    } else {
      setValidationErrors(errors);
    }
  };
  
  

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className="p-3">
        <Modal.Title>Register</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-2">
        <Form onSubmit={handleSubmit} action='/'>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              className={`mb-1 ${validationErrors.Name ? 'is-invalid' : ''}`}
              name="Name"
              placeholder="Enter name"
              value={formData.Name}
              onChange={handleChange}
              required
            />
            {validationErrors.Name && (
              <Form.Control.Feedback type="invalid">
                {validationErrors.Name}
              </Form.Control.Feedback>
            )}
          </Form.Group>

          <Form.Group controlId="formBasicPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              className={`mb-1 ${validationErrors.Phone_Number ? 'is-invalid' : ''}`}
              name="Phone_Number"
              placeholder="Enter Number"
              value={formData.Phone_Number}
              onChange={handleChange}
              required
            />
            {validationErrors.Phone_Number && (
              <Form.Control.Feedback type="invalid">
                {validationErrors.Phone_Number}
              </Form.Control.Feedback>
            )}
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              className={`mb-1 ${validationErrors.Email ? 'is-invalid' : ''}`}
              name="Email"
              placeholder="Enter email"
              value={formData.Email}
              onChange={handleChange}
              required
            />
            {validationErrors.Email && (
              <Form.Control.Feedback type="invalid">
                {validationErrors.Email}
              </Form.Control.Feedback>
            )}
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              className={`mb-1 ${validationErrors.Password ? 'is-invalid' : ''}`}
              name="Password"
              placeholder="Password"
              value={formData.Password}
              onChange={handleChange}
              required
            />
            {validationErrors.Password && (
              <Form.Control.Feedback type="invalid">
                {validationErrors.Password}
              </Form.Control.Feedback>
            )}
          </Form.Group>

          <Button variant="primary" className="m-1" type="submit">
            Register
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <p>
          Already have an account?{' '}
          <a href="#" onClick={handleShowLogin}>
            Login
          </a>
        </p>
      </Modal.Footer>
    </Modal>
  );
}

export default Registration;
