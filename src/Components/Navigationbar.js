import React, { Component } from 'react';
import Login from '../Components/Login';
import Registration from './Registration';
import { Link } from 'react-router-dom';

class Navigationbar extends Component {
   constructor(props) {
      super(props);
      this.state = {

         showLoginModal: false,
         showRegisterModal: false,
      };

      this.handleCloseLoginModal = this.handleCloseLoginModal.bind(this);
      this.handleShowLoginModal = this.handleShowLoginModal.bind(this);
      this.handleCloseRegisterModal = this.handleCloseRegisterModal.bind(this);
      this.handleShowRegisterModal = this.handleShowRegisterModal.bind(this);
      this.togglerClick = this.togglerClick.bind(this);
      this.dropdownToggleClick = this.dropdownToggleClick.bind(this);
      this.closeDropdownOnClickOutside = this.closeDropdownOnClickOutside.bind(this);
   }


   handleCloseLoginModal() {
      this.setState({ showLoginModal: false });
   }

   handleShowLoginModal() {
      this.setState({ showRegisterModal: false, showLoginModal: true });
   }

   handleCloseRegisterModal() {
      this.setState({ showRegisterModal: false });
   }

   handleShowRegisterModal() {
      this.setState({ showLoginModal: false, showRegisterModal: true });
   }

   componentDidMount() {
      const navToggler = document.querySelector('.nav-toggler');
      const navMenu = document.querySelector('.site-navbar ul');
      const dropdownToggle = document.querySelector('.site-navbar .dropdown-toggle');
      const dropdownMenu = document.querySelector('.site-navbar .dropdown-menu');

      if (navToggler && navMenu && dropdownToggle && dropdownMenu) {
         navToggler.addEventListener('click', this.togglerClick);
         dropdownToggle.addEventListener('click', this.dropdownToggleClick);
         document.addEventListener('click', this.closeDropdownOnClickOutside);
      }


   }

   componentWillUnmount() {
      const navToggler = document.querySelector('.nav-toggler');
      const dropdownToggle = document.querySelector('.site-navbar .dropdown-toggle'); if (navToggler) {
         navToggler.removeEventListener('click', this.togglerClick);
      }
      if (dropdownToggle) {
         dropdownToggle.removeEventListener('click', this.dropdownToggleClick);
      }
      document.removeEventListener('click', this.closeDropdownOnClickOutside);
   }

   togglerClick() {
      const navToggler = document.querySelector('.nav-toggler');
      const navMenu = document.querySelector('.site-navbar ul');

      if (navToggler && navMenu) {
         navToggler.classList.toggle('toggler-open');
         navMenu.classList.toggle('open');
      }
   }

   dropdownToggleClick(event) {
      event.preventDefault();
      const dropdownMenu = document.querySelector('.site-navbar .dropdown-menu');

      if (dropdownMenu) {
         dropdownMenu.classList.toggle('show');
      }
   }

   closeDropdownOnClickOutside(event) {
      const dropdownToggle = document.querySelector('.site-navbar .dropdown-toggle');
      const dropdownMenu = document.querySelector('.site-navbar .dropdown-menu');

      if (dropdownToggle && dropdownMenu && !dropdownMenu.contains(event.target) && !dropdownToggle.contains(event.target)) {
         dropdownMenu.classList.remove('show');
      }
   }

   render() {
      let logo = {
         width: '30px',
         height: '30px',
         filter: 'contrast(200%)',
      };
      let cursor = {
         cursor: 'pointer'
      };

      return (
         <div className="full_bg">
            {/* <!-- header */}
            <header className="header-area">
               <div className="container-fluid">
                  <div className="row d_flex">
                     <div className=" col-md-2 col-sm-3">
                        <div className="logo">
                           <a href="index.html">NF<span>GA</span></a>
                           {/* <i class='bx bx-chevrons-right bx-sm'></i> */}
                           <img src="images/holding-hand.png" alt="logo" style={logo} />
                        </div>
                     </div>
                     <div className="col-md-8 col-sm-9">
                        <div className="navbar-area">
                           <nav className="site-navbar">
                              <ul>
                                 <li><Link className="active" to="/">Home</Link></li>
                                 <li><Link to="/about">About</Link></li>
                                 <li className='dropdown'>
                                    <Link className="nav-link dropdown-toggle" to="void(0)" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                       Service
                                    </Link>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                       <a className="dropdown-item" href="/crop">Crop Preservation</a>
                                       <a className="dropdown-item" href="/seeds">Types Of Seeds</a>
                                       <a className="dropdown-item" href="/govschem">Goverment Schems</a>
                                       {
                                          this.props.login ? (<Link className="dropdown-item" to="/fertilizer">Fertilizer</Link>) : (<Link className="dropdown-item" to="/">Fertilizer</Link>)
                                       }
                                       {
                                          this.props.login ? (<Link className="dropdown-item" to="/soil">Soil Testing</Link>) : (<Link className="dropdown-item" to="/">Soil Testing</Link>)
                                       }
                                    </div>
                                 </li>
                                 <li><Link to="/contactus">Contact</Link></li>
                                 <li>
                                    <Registration
                                       show={this.state.showRegisterModal}
                                       handleClose={this.handleCloseRegisterModal}
                                       handleShowLogin={this.handleShowLoginModal}
                                       handler={this.props.submithandler}
                                    />
                                    {
                                       this.props.login ? (<Link style={cursor}>
                                          Register
                                       </Link>) : (<Link style={cursor} onClick={this.handleShowRegisterModal}>
                                          Register
                                       </Link>)
                                    }

                                 </li>
                                 <li>
                                    <Login
                                       show={this.state.showLoginModal}
                                       handleClose={this.handleCloseLoginModal}
                                       handleShowRegister={this.handleShowRegisterModal}
                                       loginhandler={this.props.loginhandler} // Pass the loginhandler function as a prop
                                    />
                                    {
                                       this.props.login ? (<Link style={cursor} to='/' onClick={this.props.loginchange}>
                                          Logout
                                       </Link>) : (<Link style={cursor} onClick={this.handleShowLoginModal}>
                                          Login
                                       </Link>)
                                    }
                                 </li>
                              </ul>
                              <button className="nav-toggler">
                                 <span></span>
                              </button>
                           </nav>
                        </div>
                     </div>
                     <div className="col-md-2 padd_0 d_none">
                        <ul className="email text_align_right">
                           <li>
                              {
                                 this.props.login ? (<a href="/cart"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="20" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                 <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                              </svg></a>):(<a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="20" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                 <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                              </svg></a>)
                              }
                              
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </header>
            {/* <!-- end header inner */}
         </div>
      );
   }
}

export default Navigationbar;
