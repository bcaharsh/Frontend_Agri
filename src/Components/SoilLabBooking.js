import React, { Component } from 'react';
import axios from 'axios';

export default class SoilLabBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      contactNumber: '',
      date: '',
      time: '',
      submitted: false
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // Validation
    const { name, email, contactNumber, date, time } = this.state;
    if (!name || !email || !contactNumber || !date || !time) {
      alert('All fields are required.');
      return;
    }
    if (!email.endsWith('@gmail.com')) {
      alert('Email must be a Gmail address.');
      return;
    }
    if (contactNumber.length !== 10) {
      alert('Contact number must be 10 digits.');
      return;
    }
    if (new Date(date + 'T' + time) < new Date()) {
      alert('Please select a future date and time.');
      return;
    }

    // Form submission logic
    const data = {
      DateOfBooking: this.state.date,
      Email: this.state.email,
      Name: this.state.name,
      PhoneNumber: this.state.contactNumber,
      TimeSlot: this.state.time
    };
    axios.post('http://127.0.0.1:8000/apibooking/', data)
      .then(response => {
        console.log(response);
        // Handle success if submission is successful
        this.setState({ submitted: true });
      })
      .catch(error => {
        console.log(error);
        // Handle errors if submission fails
      });
  }

  render() {
    return (
      <div className="container w-50">
        {this.state.submitted && (
          <div className="alert alert-success m-2" role="alert">
            Successfully booked!
          </div>
        )}
        <form onSubmit={this.handleSubmit} className='needs-validation border border-dark p-4 text-left' method='post'>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className='form-control border border-dark' 
              value={this.state.name} 
              onChange={this.handleInputChange} 
              required 
            />
            <div className="invalid-feedback">
              Please provide a valid name.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className='form-control border border-dark' 
              value={this.state.email} 
              onChange={this.handleInputChange} 
              required 
            />
            <div className="invalid-feedback">
              Please provide a valid email address ending with '@gmail.com'.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="contactNumber" className="form-label">Contact Number:</label>
            <input 
              type="tel" 
              id="contactNumber" 
              name="contactNumber" 
              className='form-control border border-dark' 
              value={this.state.contactNumber} 
              onChange={this.handleInputChange} 
              minLength={10} 
              maxLength={10} 
              required 
            />
            <div className="invalid-feedback">
              Please provide a valid 10-digit contact number.
            </div>
          </div>

          <div className="mb-3 row">
            <div className="col">
              <label htmlFor="date" className="form-label">Date:</label>
              <input 
                type="date" 
                id="date" 
                name="date" 
                className='form-control border border-dark' 
                value={this.state.date} 
                onChange={this.handleInputChange} 
                min={new Date().toISOString().split('T')[0]} // Set min attribute to current date
                required 
              />
              <div className="invalid-feedback">
                Please select a date.
              </div>
            </div>
            <div className="col">
              <label htmlFor="time" className="form-label">Time:</label>
              <input 
                type="time" 
                id="time" 
                name="time" 
                className='form-control border border-dark' 
                value={this.state.time} 
                onChange={this.handleInputChange} 
                required 
              />
              <div className="invalid-feedback">
                Please select a time.
              </div>
            </div>
          </div>
          <div className='text-center mt-4'>
            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="reset" className="btn btn-primary ml-3">Clear</button>
          </div>
        </form>
      </div>
    );
  }
}
