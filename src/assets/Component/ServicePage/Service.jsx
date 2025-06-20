import React from 'react'
import banner from '../Image/Servicepage/MainBanner/banner.jpg';
import Logo from '../Image/Logo/Logo.png';
import swimming from '../Image/Servicepage/Services/swimming.jpg';
import parking from '../Image/Servicepage/Services/parking.png';
import lifts from '../Image/Servicepage/Services/lifts.jpg';
import star from '../Image/Servicepage/MainBanner/star.jpg';
import Wifi from '../Image/Servicepage/Services/Wifi.webp';
import Security from '../Image/Servicepage/Services/Security.webp';
import Hall from '../Image/Servicepage/Services/Hall.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import './Service.css';

function Service() {
  const handleScrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div>
      <div className="co mt-4">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2000" >
              <img
                src={banner}
                className="d-block w-100"
                alt="Slide 1"
              />
              {/* <h1 className='title-service'>Welcome to Hotel <br />Royal Palace</h1> */}

            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src={star}
                className="d-block w-100"
                alt="Slide 2"
              />
            </div>

          </div>
          {/* Previous button */}
          {/* <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button> */}
        </div>

        <div className="header d-flex justify-content-between align-items-center px-4">
          <img src={Logo} className="logo" alt="Logo" />
          <nav className="navbar d-flex gap-4">
            <Link className="text-decoration-none text-white nav" to="/" onClick={handleScrollToBottom}>
              Home
            </Link>
            <Link className="text-decoration-none text-white nav" to="/Aboutus" onClick={handleScrollToBottom}>
              About
            </Link>
            <Link className="text-decoration-none text-white nav" to="/Blog" onClick={handleScrollToBottom}>
              Blog
            </Link>
            <Link className="text-decoration-none text-white  nav" to="/Service" onClick={handleScrollToBottom}>
              Service
            </Link>
            <Link className="text-decoration-none text-white nav" to="/Contactus" onClick={handleScrollToBottom}>
              Contact
            </Link>
          </nav>
          <button className="book-now text-white mx-4 bg-danger">Book Now</button>
        </div>
      </div>




      <div className='Servic'>
        <h2 className='text-white'>SERVICES</h2>
      </div>
      <div className="Service-Section my-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card" style={{ width: "80%" }}>
              <img src={swimming} className="card-img-top" alt="Card 1" />
              <div className="card-body">
                <h5 className="card-title ">Swimming Pool</h5>
                <p className="card-text text-start">
                  Dive into serenity and luxury at our exquisite swimming pool. Designed with elegance and surrounded lush greenery.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "80%" }}>
              <img src={parking} className="card-img-top" alt="Card 2" />
              <div className="card-body">
                <h5 className="card-title">Paid Parking</h5>
                <p className="card-text text-start">
                  Experience hassle-free parking with our secure and well-maintained paid parking facility Strategically located.                </p>

              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "80%" }}>
              <img src={lifts} className="card-img-top" alt="Card 3" />
              <div className="card-body">
                <h5 className="card-title">Lift</h5>
                <p className="card-text text-start">
                  Effortlessly navigate every floor of our property with our state-of-the-art lift service. Designed for comfort reliability,                 </p>

              </div>
            </div>
          </div>
        </div>



        <div className='Second-columns mt-5'>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card" style={{ width: "80%" }}>
                <img src={Wifi} className="card-img-top" alt="Wifi" />
                <div className="card-body">
                  <h5 className="card-title">WiFi Connection</h5>
                  <p className="card-text text-start">
                    Improved Connectivity
                    Knowing your Wi-Fi details helps you troubleshoot connectivity issues ensures. </p>

                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: "80%" }}>
                <img src={Security} className="card-img-top" alt="Security" />
                <div className="card-body">
                  <h5 className="card-title">Professional Security</h5>
                  <p className="card-text text-start">
                    Professional security refers to measures, protocols, and systems designed to protect individuals, businesses assets  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: "80%" }}>
                <img src={Hall} className="card-img-top" alt="Hall" />
                <div className="card-body">
                  <h5 className="card-title">Reception Hall</h5>
                  <p className="card-text text-start">
                    Designed to accommodate a specific number of guests comfortably, ranging from small private events .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <footer className="footer mt-5" id="contact" style={{ minHeight: '300px' }}>
        <div className="bg-black text-light">
          <div className="container-fluid">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 gy-4 py-4 px-5">
              <div className="col">
                <div className="d-flex flex-column" style={{ lineHeight: '1.8' }}>
                  <img src={Logo} className="lk mx-5" alt="Logo" />
                  <p className="text-secondary">
                    Royal Hotel offers a luxurious and <br /> unforgettable experience. <br />
                    From elegant rooms and state-of-the-art facilities to exceptional service.
                  </p>
                </div>
              </div>

              <div className="col py-4">
                <h5 className="text-white">QUICK LINKS</h5>
                <ul className="list-unstyled mt-3" style={{ lineHeight: '1.8' }}>
                  <li>
                    <Link className="quick-link text-decoration-none" to="/Home">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="quick-link text-decoration-none" to="/Aboutus">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className="quick-link text-decoration-none" to="/Blog">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link className="quick-link text-decoration-none" to="/Contactus">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link className="quick-link text-decoration-none" to="/Service">
                      Service
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col py-4">
                <h5 className="text-white">OUR SERVICES</h5>
                <ul className="list-unstyled mt-3" style={{ lineHeight: '1.8' }}>
                  <li className="quick-link py-1 cursor-pointer">Concierge Assistance</li>
                  <li className="quick-link py-1 cursor-pointer">Wellness Recreation</li>
                  <li className="quick-link py-1 cursor-pointer">Flexible Booking</li>
                  <li className="quick-link py-1 cursor-pointer">Airport Transfers</li>
                </ul>
              </div>

              <div className="col py-4">
                <h5 className="text-white">CONTACT US</h5>
                <ul className="list-unstyled mt-3" style={{ lineHeight: '1.8' }}>
                  <li className="quick-link fw-bold cursor-pointer">RoyalHotel@info.com</li>
                </ul>
                <div className="d-flex ms-5 mx-5 px-3">
                  <a href="#" className="fs-3 me-3 text-primary" aria-label="Facebook">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </a>
                  <a href="#" className="fs-3 me-3 text-danger" aria-label="Instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="#" className="fs-3 me-3 text-white" aria-label="YouTube">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                  <a href="#" className="fs-3 text-info" aria-label="Twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center py-2 bg-dark text-light">
          Copyright © 2024 Web Design Mastery. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Service