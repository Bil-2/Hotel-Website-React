import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import Logo from '../Image/Logo/Logo.png';
import banner from '../Image/ContactPage/MainBanner/banner.jpg';
import star from '../Image/ContactPage/MainBanner/star.jpg';
import axios from 'axios';
import "react-phone-input-2/lib/bootstrap.css";
import PhoneInput from "react-phone-input-2";
import './Contactus.css';


const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");


  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };
  // const handlePhoneChange = (value) => {
  //   setFormData({ ...formData, phone: value });
  //   validatePhone(value);
  // };

  // const validatePhone = (phone) => {
  //   const numericPhone = phone.replace(/\D/g, "");

  //   if (numericPhone.length < 8) {
  //     setPhoneError("Phone number is invalid");
  //   } else {
  //     setPhoneError("");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    let hasError = false;
  
    const numericPhone = formData.phone.replace(/\D/g, ""); // Remove non-numeric characters
    if (numericPhone.length < 8) {
      setPhoneError("Phone number is invalid.");
      hasError = true;
    } else {
      setPhoneError("");
    }
  
    const invalidDomains = /\.co$|\.c$/;
    const invalidEmails = ["123@gmail.com"];
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    if (!emailPattern.test(formData.email)) {
      setEmailError("Please enter a valid email address");
      hasError = true;
    } else if (invalidDomains.test(formData.email)) {
      setEmailError("Emails ending with .co or .c are not allowed.");
      hasError = true;
    } else if (invalidEmails.includes(formData.email)) {
      setEmailError("This email is not allowed.");
      hasError = true;
    } else {
      setEmailError("");
    }
  
    if (hasError) {
      alert("Please correct all errors before submitting.");
      return;
    }
  
    try {
      const response = await axios.post(
        "http://localhost:5001/submit-form",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
  
      if (response.status === 200) {
        alert("Form Submitted Successfully");
        setFormData({ name: "", email: "", phone: "", message: "" });
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("There was an error submitting your form. Please try again.");
    }
  };
  
  const handlePhoneChange = (phone) => {
    setFormData({ ...formData, phone });
  
    const numericPhone = phone.replace(/\D/g, "");
    if (numericPhone.length < 8) {
      setPhoneError("Phone number is invalid.");
    } else {
      setPhoneError("");
    }
  };
  
  const handleEmailChange = (e) => {
    const email = e.target.value;
    setFormData({ ...formData, email });
  
    const invalidDomains = /\.co$|\.c$/;
    const invalidEmails = ["123@gmail.com"];
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    if (!emailPattern.test(email)) {
      setEmailError("Invalid email format.");
    } else if (invalidDomains.test(email)) {
      setEmailError("Emails ending with .co or .c are not allowed.");
    } else if (invalidEmails.includes(email)) {
      setEmailError("This email is not allowed.");
    } else {
      setEmailError("");
    }
  };
  
  const handleScrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    validateEmail(value);
  };

  const validateEmail = (email) => {
    const invalidDomains = /\.co$|\.c$/; 
    const invalidEmails = ["123@gmail.com"]; 
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 

    if (!emailPattern.test(email)) {
      setEmailError("Invalid email format.");
    } else if (invalidDomains.test(email)) {
      setEmailError("Emails ending with .co or .c are not allowed.");
    } else if (invalidEmails.includes(email)) {
      setEmailError("This email is not allowed.");
    } else {
      setEmailError(""); 
    }
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
              <h1 className='title-contact text-white text-center'>CONTACT US</h1>

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


      <div className="Past contact mt-5">
        <div className="row">
          <div className="col-md-6 ">

            <form className="row g-3   border shadow p-3 mb-5 bg-body-tertiary rounded px-5" onSubmit={handleSubmit}>
              <h2 className="cl">Contact Us</h2>
              <div className="col-12 ">
                <label htmlFor="name" className="form-label text-start d-block px-3">Name</label>
                <input
                  type="text"
                  className="form-control px-4"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="col-12">
                <label htmlFor="email" className="form-label text-start d-block px-3">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email"
                  required
                />
                {emailError && <p className="text-start text-danger">{emailError}</p>}

              </div>
              <div className="col-12 ">
                <label htmlFor="phone" className="form-label text-start d-block px-3 ">
                </label>
                <PhoneInput
                  country={"us"}
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  inputClass="form-control custom-phone-input"
                  containerClass="w-50"
                  inputProps={{
                    name: "phone",
                    required: true,
                    autoFocus: true,
                  }}
                />
                {phoneError && <p className=" text-start text-danger ">{phoneError}</p>}
              </div>
              <div className="col-12">
                <label htmlFor="message" className="form-label text-start d-block px-3 h-25">Message</label>
                <textarea
                  className="form-control h-75"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  cols="5"
                  placeholder="Write your message here"
                  required
                ></textarea>
              </div>
              <div className="col-12 mb-3 mt-4 d-flex justify-content-center">
                <button type="submit" className="butn">Submit</button>
              </div>
            </form>
          </div>

          <div className="col-md-6">
            <h5 className="text-center mb-4">Find Us Here</h5>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d945.7699896496351!2d73.84977429999999!3d18.5252885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c07968834e37%3A0x8e11620efcaf1681!2sHotel%20Royal%20Palace!5e0!3m2!1sen!2sin!4v1733909239177!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map of Hotel Royal Palace"
              ></iframe>
            </div>
          </div>
        </div>
      </div>



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

export default Contactus