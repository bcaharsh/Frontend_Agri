import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Navigationbar from './Components/Navigationbar'
import Contentbox from './Components/ContentBox'
import DialogCrop from './Components/Dialogcrop';
import FertilizerContent from './Components/FertilizerContent';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Footer from './Components/Footer';
import axios from 'axios';
import Cart from './Components/Cart';
import SoilTesting from './Components/SoilTesting';
import Typesseeds from './Components/Typesseeds';
import GovermentSchem from './Components/GovermentSchem';
import SoilLabBooking from './Components/SoilLabBooking';
import Login from './Components/Login';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: null,
      login: false,
      product: {},
      item: '',
      logindata: null,
      postIddata: null,
      validation: "",
    }
  }
  componentDidMount() {
    // Check if user is already logged in using cookies
    const loggedInCookie = document.cookie.split('; ').find(row => row.startsWith('loggedIn='));
    if (loggedInCookie) {
      this.setState({ login: true });
    }

    // Fetch data from API
    axios.get('http://127.0.0.1:8000/apiget/')
      .then(response => {
        this.setState({ posts: response.data.users });
      })
      .catch((error) => {
        console.log(error);
      });

    // Make GET request using Axios
    axios.get('http://127.0.0.1:8000/apiget/')
      .then(response => {
        // Handle successful response
        this.setState({ product: response.data });
        // console.log(response.data.product);
      })
      .catch(error => {
        // Handle error
        console.error('Error fetching product:', error);
      });

  }

  loginhandler = (event) => {
    event.preventDefault();
    const Email = event.target.Email.value;
    const Password = event.target.Password.value;

    if (this.state.posts !== null) {
      const posts = this.state.posts.find(post => Email === post.Email && Password === post.Password);
      if (posts) {
        let postId = posts.id;
        console.log(postId);
        // Set cookie to indicate user is logged in
        document.cookie = `postId=${postId}; path=/;`;
        document.cookie = "loggedIn=true; path=/;";
        this.setState({ login: true, logindata: [Email, Password], postIddata: postId });
        console.log('true', posts.Email);
        console.log('true', posts.Password);
      }
      else {
        this.setState({ validation: "Invalid Username or Password" })
      }
    }
    else {
      this.setState({ validation: "" })
    }
  };

  loginchange = () => {
    // Clear login state
    this.setState({ login: false });

    // Delete cookie by setting expiry date to past
    document.cookie = "postId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  };


  render() {
    const MyComponent = () => {
      return <div>
        <Navigationbar validation={this.state.validation} loginhandler={this.loginhandler} loginchange={this.loginchange} submithandler={this.submithandler} login={this.state.login} />
      </div>;
    };
    let mapsty = {
      width: '100%',
      border: '0',
    }
    // console.log(this.state.product.product);
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='/' element={
              <>
                <MyComponent />
                <Header />
                <About />
                <Services />
                <Contact />

              </>
            } />
            <Route path='/contactus' element={
              <div className='main-layout inner_page about_page'>
                <MyComponent />
                <Contact />
                <div className="map-responsive">
                  <iframe className='sm:mt-5 sm:mb-3 lg:rounded-full sm:rounded-none object-cover object-center' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14686.487563061788!2d72.5591862!3d23.0376513!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8530f4f795bf%3A0xeabac0ef0a014f41!2sBhishma%20Agri%20Research%20Biotech%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1704663136819!5m2!1sen!2sin" width="600" height="450" title='map' loading="lazy" style={mapsty} referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            } />
            <Route path='/about' element={
              <div className='main-layout inner_page about_page'>
                <MyComponent />
                <About />
              </div>
            } />
            <Route path='/crop' element={
              <div className='main-layout inner_page about_page'>
                <MyComponent />
                <Contentbox />
                <DialogCrop />
              </div>
            } />
            <Route path='/seeds' element={
              <div className='main-layout inner_page about_page'>
                <MyComponent />
                <Typesseeds />
              </div>
            } />
            <Route path='/govschem' element={
              <div className='main-layout inner_page about_page'>
                <MyComponent />
                <GovermentSchem />
              </div>
            } />
            <Route path='/fertilizer' element={
              <div className='main-layout inner_page about_page'>
                <MyComponent />
                <h2 className='m-3'>FERTILIZER</h2>
                <FertilizerContent check={this.state.login} product={this.state.product} addToCart={this.addToCart} />
              </div>
            } />
            {
              this.state.login ? (<Route path='/cart' element={
                <div className='main-layout inner_page about_page'>
                  <MyComponent />
                  <h2 className='m-3'>Add to Cart</h2>
                  <Cart product={this.state.product} />
                </div>
              } />) : (null)
            }

            {
              this.state.login ? (<Route path='/soil' element={<div className='main-layout inner_page about_page'>
                <MyComponent />
                <h2 className='m-3'>SOIL TESTING</h2>
                <SoilTesting />
              </div>
              } />) : (null)
            }
            {
              this.state.login ? (<Route path='/labbooking' element={<div className='main-layout inner_page about_page'>
                <MyComponent />
                <h2 className='m-3'>SOIL LAB BOOKING</h2>
                <SoilLabBooking />
              </div>
              } />) : (null)
            }

            <Route path='*' element={<div className='main-layout inner_page about_page'>
              <Navigationbar />
              <h1 className='m-4'>404 Page Not Found</h1></div>} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
