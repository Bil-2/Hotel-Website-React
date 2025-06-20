import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import Logo from '../Image/Logo/Logo.png';
import pool from '../Image/BlogPage/Blogs/pool.jpg';
import south from '../Image/BlogPage/Blogs/south.jpg';
import smm from '../Image/BlogPage/Blogs/smm.jpg';
import banner from '../Image/BlogPage/MainBanner/banner.jpg';
import star from '../Image/BlogPage/MainBanner/star.jpg';
// import room from '../../Image/BlogPage/Blogs/room.jpg';
// import special from '../../Image/BlogPage/Blogs/special.png';
import './Blog.css';





function Blog() {
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
            <div className="carousel-item active" data-bs-interval="2000">
              <img
                src={banner}
                className="d-block w-100"
                alt="Slide 1"
              />
              {/* <h1 className='title'>Welcome to Hotel <br />Royal Palace</h1> */}

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


      <div className='Bl mt-3'>
        <h2 className='mt-3 text-white'>BLOG</h2>
      </div>

      <div className="Most mt-5 py-5 pt-5 opacity-100">
        <div className="latte row">
          <div className="col">
            <div className="card">
              <img
                src={pool}
                className="card-img-top"
                alt="Card 1"
              />
              <div className="card-body ">
                <h5 className="card-title ">Swimming Pool <br /><span className='tr text-danger'>Standard Hotel</span>
                </h5>

                <p className="card-text text-start">
                  A swimming pool is a tank or large basin that is filled with water and intended for recreational or competitive swimming or diving.
                </p>

              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img
                src={smm}
                className="card-img-top"
                alt="Card 2"
              />
              <div className="card-body">
                <h5 className="card-title ">The Dinner Place <br /><span className=' text-danger'>Standard Hotel</span>
                </h5>

                <p className="card-text text-start">
                  “Water in the pool is blue as the sky and clean as a crystal” “Deep and rich color Flowers beds along the fence seems to sing a song with the breeze”
                </p>

              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img
                src={south}
                className="card-img-top"
                alt="Card 3"
              />
              <div className="card-body">
                <h5 className="card-title ">Hotel Passage <br /><span className=' text-danger'>Standard Hotel</span>
                </h5>

                <p className="card-text text-start">
                  hotel offers a perfect blend of comfort, luxury, and convenience. Whether you’re here for business or leisure, we promise to make.
                </p>

              </div>
            </div>
          </div>

        </div>

      </div>


      {/* <div className='Second-Blog'>
        <div className='row row-cols-1 row-cols-md-3 g-4'>
        <div className="col">
          <div className="card">
            <img
              src={room}
              className="card-img-top"
              alt="room"
            />
            <div className="card-body ">
              <h5 className="card-title ">Swimming Pool <br /><span className='tr text-danger'>Standard Hotel</span>
              </h5>

              <p className="card-text">
                A swimming pool is a tank or large basin that is filled with water and intended for recreational or competitive swimming or diving.
              </p>

            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img
              src={special}
              className="card-img-top"
              alt="Card 2"
            />
            <div className="card-body">
              <h5 className="card-title ">The Dinner Place <br /><span className=' text-danger'>Standard Hotel</span>
              </h5>

              <p className="card-text">
                “Water in the pool is blue as the sky and clean as a crystal” “Deep and rich color Flowers beds along the fence seems to sing a song with the breeze”
              </p>

            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img
              src={south}
              className="card-img-top"
              alt="Card 3"
            />
            <div className="card-body">
              <h5 className="card-title ">Hotel Passage <br /><span className=' text-danger'>Standard Hotel</span>
              </h5>

              <p className="card-text">
                hotel offers a perfect blend of comfort, luxury, and convenience. Whether you’re here for business or leisure, we promise to make.
              </p>

            </div>
          </div>
        </div>
      </div>
      </div> */}

      <footer className="footer mt-5" id="contact" style={{ minHeight: '300px' }}>
        {/* Main Footer */}
        <div className="bg-black text-light">
          <div className="container-fluid">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 gy-4 py-4 px-5">
              {/* Column 1: About */}
              <div className="col">
                <div className="d-flex flex-column" style={{ lineHeight: '1.8' }}>
                  <img src={Logo} className="lk mx-5" alt="Logo" />
                  <p className="text-secondary">
                    Royal Hotel offers a luxurious and <br /> unforgettable experience. <br />
                    From elegant rooms and state-of-the-art facilities to exceptional service.
                  </p>
                </div>
              </div>

              {/* Column 2: Quick Links */}
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

              {/* Column 3: Our Services */}
              <div className="col py-4">
                <h5 className="text-white">OUR SERVICES</h5>
                <ul className="list-unstyled mt-3" style={{ lineHeight: '1.8' }}>
                  <li className="quick-link py-1 cursor-pointer">Concierge Assistance</li>
                  <li className="quick-link py-1 cursor-pointer">Wellness Recreation</li>
                  <li className="quick-link py-1 cursor-pointer">Flexible Booking</li>
                  <li className="quick-link py-1 cursor-pointer">Airport Transfers</li>
                </ul>
              </div>

              {/* Column 4: Contact Us */}
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

        {/* Footer Bar */}
        <div className="text-center py-2 bg-dark text-light">
          Copyright © 2024 Web Design Mastery. All rights reserved.
        </div>
      </footer>

    </div>







  )
}

export default Blog