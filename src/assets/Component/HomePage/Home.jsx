import React, { useState } from "react";
import Logo from '../Image/Logo/Logo.png';
// import Novotel from '../../Image/HomePage/Novotel.jpg'
// import swim from '../../Image/HomePage/swim.png';
// import hotels from '../../Image/HomePage/hotels.jpg';
// import design from '../../Image/HomePage/design.png';
// import bed from '../../Image/HomePage/bed.webp';
// import home from '../../Image/HomePage/home.jpeg';
// import modern from '../../Image/HomePage/modern.jpg';
import New from '../Image/HomePage/Clients/New.jpeg';
import avenue from '../Image/HomePage/Clients/avenue.jpeg';
import client from '../Image/HomePage/Clients/client.jpg';
import Beverely from '../Image/HomePage/Gallery/Beverely.webp';
import resorts from '../Image/HomePage/Gallery/resorts.webp';
import Most from '../Image/HomePage/Gallery/Most.jpg';
import decor from '../Image/HomePage/Gallery/decor.jpg';
import vector from '../Image/HomePage/Gallery/vector.jpg';
import stock from '../Image/HomePage/Gallery/stock.jpg';
import diseney from '../Image/HomePage/Gallery/diseney.jpg';
import bedroom from '../Image/HomePage/Gallery/bedroom.jpg';
import Jw from '../Image/HomePage/Popular Hotel/Jw.webp';
import Sgg from '../Image/HomePage/Popular Hotel/Sgg.jpg';
import Saharas from '../Image/HomePage/Popular Hotel/Saharas.jpg';
import westin from '../Image/HomePage/Popular Hotel/westin.jpg';
import marriott from '../Image/HomePage/Popular Hotel/marriott.jpg';
import hyatt from '../Image/HomePage/Popular Hotel/hyatt.jpg';
import banner from '../Image/HomePage/banner/banner.jpg';
import star from '../Image/HomePage/banner/star.jpg';
// import hotel from '../../Image/HomePage/hotel.jpg';
import Novotel from '../Image/HomePage/BookingC/Novotel.jpg';
import apexx from '../Image/HomePage/BookingC/apexx.jpg';
import phoneix from '../Image/HomePage/BookingC/phoneix.jpeg';
import stLaurn from '../Image/HomePage/BookingC/stLaurn.avif';
import anjanta from '../Image/HomePage/BookingC/anjanta.jpeg';
import anjani from '../Image/HomePage/BookingC/anjani.jpg';
import tajpalace from '../Image/HomePage/BookingC/tajpalace.jpg';
import ranjeet from '../Image/HomePage/BookingC/ranjeet.avif';
import hotelG from '../Image/HomePage/BookingC/hotelG.avif';
import hotelyashoda from '../Image/HomePage/BookingC/hotelyashoda.avif';
import sai from '../Image/HomePage/BookingC/sai.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ToastContainer, toast } from 'react-toastify';
import './Home.css';


function Home() {

  const [isCheckOutVisible, setIsCheckOutVisible] = useState(false);

  const handleCheckInFocus = () => {
    setIsCheckOutVisible(true);
  };

  const testimonials = [
    {
      name: "John Doe",
      image: client,
      feedback:
        "Highly professional team. They ensured everything was perfect for our travel needs.",
    },
    {
      name: "Jane Smith",
      image: New,
      feedback:
        "Excellent service and a user-friendly platform. I was able to find the best deals in minutes.",
    },
    {
      name: "Michael Avenue",
      image: avenue,
      feedback:
        "The team provided outstanding service. I highly recommend their expertise.",
    },
    {
      name: "Emily Rose",
      image: client,
      feedback: "Fantastic experience! I’ll definitely use their service again.",
    },
  ];

  const groupedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    groupedTestimonials.push(testimonials.slice(i, i + 2));
  }

  // const [formData, setFormData] = useState({
  //   location: "",
  //   checkIn: "",
  //   checkOut: "",
  //   guests: "",
  //   amount: "",
  // });
  const [bookingDetails, setBookingDetails] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    guests: '',
    amount: '',
  });

  const [selectedPaymentButton, setSelectedPaymentButton] = useState(null);
  const [phoneError, setPhoneError] = useState("");

  const [searchTerm, setSearchTerm] = useState('');
  const [bookings, setBookings] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [selectedPaymentMethods, setSelectedPaymentMethods] = useState([]);
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
  const [isBooking, setIsBooking] = useState(false);
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");


  const [paymentMethods, setPaymentMethods] = useState({
    googlePay: false,
    phonePe: false,
    paytm: false,
  });
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");



  // const hotel = [
  //   { name: "Hotel Novotel", location: "Pune", price: "Rs.3000", img: Novotel, },
  //   { name: "Hotel Apex International", location: "Mumbai", price: "Rs.3000", img: 'hotel1.jpg', },
  //   { name: "Hotel St Laurn", location: "Pune", price: "Rs.3000", img: 'hotel1.jpg', },
  //   { name: "Hotel Anjata", location: "Delhi", price: "Rs.3000", img: 'hotel1.jpg', },
  //   { name: "Hotel Phoneix International", location: "Mumbai", price: "Rs.3000", img: phoneix, },
  //   { name: "Hotel Grand Choice", location: "Beed", price: "Rs.3000", img: grandc, },
  //   { name: "Hotel Grand Yashoda", location: "Beed", price: "Rs.3000", img: hotelyashoda, },
  //   { name: "Hotel Sai International", location: "Latur", price: "Rs.3000", img: sai, },
  //   { name: "Hotel Anjani", location: "Latur", price: "Rs.3000", img: anjani, },
  //   { name: "Hotel Ranjeet", location: "Akola", price: "Rs.3000", img: 'hotel1.jpg', },
  //   { name: "Hotel Palace", location: "New Delhi", price: "Rs.3000", img: 'hotel1.jpg', },
  //   { name: "Hotel Palace", location: "New Delhi", price: "Rs.3000", img: 'hotel1.jpg', },
  // ];

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };


  const [formData, setFormData] = useState({
    location: "",
    customerName: "",
    email: "",
    phone: "",
    paymentMethod: "",
    paymentStatus: "Pending",
    isPaid: false,

  });

  const [errors, setErrors] = useState({
    customerName: "",
    email: "",
    phone: "",
    paymentMethod: "",
  });

  const handlePaid = () => {
    setFormData((prevData) => ({
      ...prevData,
      isPaid: true,
    }));
  };

  const handleBookNow = (hotel) => {
    setSelectedHotel(hotel);
    setIsBooking(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "email") {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const invalidEmails = ["123@gmail.com", "test@gmail.com"]; // Block specific emails

      if (!emailRegex.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Please enter a valid email ",
        }));
      } else if (invalidEmails.includes(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "This email is not allowed",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "",
        }));
      }
    }
  };




  const handleSubmit = (e) => {
    e.preventDefault();

    const foundHotels = [
      { name: "Hotel Novotel", location: "Pune", price: "Rs.5000", img: Novotel, },
      { name: "Hotel Apex International", location: "Mumbai", price: "Rs.9000", img: apexx, },
      { name: "Hotel St Laurn", location: "Pune", price: "Rs.5000", img: stLaurn, },
      { name: "Hotel Anjata", location: "Delhi", price: "Rs.6000", img: anjanta, },
      { name: "Hotel Phoneix International", location: "Mumbai", price: "Rs.8000", img: phoneix, },
      { name: "Hotel Grand Choice", location: "Beed", price: "Rs.8000", img: hotelG, },
      { name: "Hotel Grand Yashoda", location: "Beed", price: "Rs.9000", img: hotelyashoda, },
      { name: "Hotel Sai International", location: "Latur", price: "Rs.2000", img: sai, },
      { name: "Hotel Anjani", location: "Latur", price: "Rs.9000", img: anjani, },
      { name: "Hotel Ranjeet", location: "Akola", price: "Rs.7000", img: ranjeet },
      { name: "Hotel Taj Palace", location: "New Delhi", price: "Rs.5000", img: tajpalace, },
    ];
    setHotels(foundHotels);
    setShowResults(true);
  };

  // const handleBookNow = () => {
  //   setIsBooked(true);
  // };
  // const [selectedPaymentMethods, setSelectedPaymentMethods] = useState([]);

  // const handleCheckboxChange = (e, method) => {
  //   const { checked } = e.target;

  //   // Update payment methods state
  //   setPaymentMethods({
  //     ...paymentMethods,
  //     [method]: checked,
  //   });

  //   // Update selected payment methods
  //   if (checked) {
  //     setSelectedPaymentMethods([...selectedPaymentMethods, method]);
  //   } else {
  //     setSelectedPaymentMethods(selectedPaymentMethods.filter((item) => item !== method));
  //   }
  // };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const validateBooking = () => {
    const errors = {};
    if (!bookingDetails.location) errors.location = "Location is required.";
    if (!bookingDetails.checkIn) errors.checkIn = "Check-In date is required.";
    if (!bookingDetails.checkOut) errors.checkOut = "Check-Out date is required.";
    if (!bookingDetails.guests) errors.guests = "Number of guests is required.";
    if (!bookingDetails.amount) errors.amount = "Amount is required.";
    if (parseInt(bookingDetails.guests) <= 0) errors.guests = "Guests number must be greater than 0.";
    if (parseFloat(bookingDetails.amount) <= 0) errors.amount = "Amount must be greater than 0.";
    return Object.keys(errors).length === 0 ? null : errors;
  };

  const openHotelModal = () => {
    setIsModalOpen(true);
  };

  const selectHotel = (hotel) => {
    setSelectedHotel(hotel);
    setIsModalOpen(false);
  };

  // const formData = { location: "Mumbai", }; // Replace with dynamic location

  // const hotel= [
  //   {
  //     name: "Hotel Blue Diamond",
  //     location: "Pune",
  //     price: "$100/night",
  //     img: "path/to/bedroom.jpg", // Use actual path
  //   },
  //   // Add more hotels here
  // ];

  const handleCheckboxChange = (e, method) => {
    setPaymentMethods((prevMethods) => ({
      ...prevMethods,
      [method]: e.target.checked,
    }));

    if (e.target.checked) {
      setSelectedPaymentMethods((prev) => [...prev, method]);
    } else {
      setSelectedPaymentMethods((prev) =>
        prev.filter((item) => item !== method)
      );
    }
  };

  // const handleBookNow = (hotel) => {
  //   setSelectedHotel(hotel);
  //   setIsBooked(true);
  // };

  const allHotels = [
    { name: "Hotel Novotel", location: "Pune", price: "Rs.3000" },
    { name: "Hotel Apex International", location: "Mumbai", price: "Rs.5000" },
    { name: "Hotel ST Laurn", location: "Pune", price: "Rs.6000" },
    { name: "Hotel Anjata", location: "Delhi", price: "Rs.9000" },
    { name: "Hotel Phoneix International", location: "Mumbai", price: "Rs.2000" },
    { name: "Hotel Grand Choice", location: "Beed", price: "Rs.7000" },
    { name: "Hotel Grand Yashoda", location: "Beed", price: "Rs.4000" },
    { name: "Hotel Sai International", location: "Latur", price: "Rs.3000" },
    { name: "Hotel Anjani", location: "Latur", price: "Rs.3300" },
    { name: "Hotel Ranjeet", location: "Akola", price: "Rs.10000" },
    { name: "Hotel Palace", location: "New Delhi", price: "Rs.3000" },
    { name: "Hotel Palace", location: "New Delhi", price: "Rs.3400" },

  ];
  const handleLocationSearch = (e) => {
    const location = e.target.value;
    setSearchLocation(location);


  }
  const filteredHotels = hotels.filter((hotel) =>
    hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hotel.location.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const handleHotelSelection = (hotel) => {
    setSelectedHotel(hotel);
    setShowPaymentOptions(true);
  };

  // const handleCheckboxChange = (e, method) => {
  //   const newMethods = e.target.checked
  //     ? [...selectedPaymentMethods, method]
  //     : selectedPaymentMethods.filter((m) => m !== method);
  //   setSelectedPaymentMethods(newMethods);
  // };



  const fetchBookings = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/bookings");

      if (!response.ok) {
        throw new Error(`Server error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log("✅ Bookings fetched:", data);
      setBookings(data);
    } catch (error) {
      console.error("❌ Error fetching bookings:", error.message);
      alert("Failed to fetch bookings. Please check the API URL.");
    }
  };



  const handleConfirmBooking = async () => {
    let newErrors = {};

    if (!formData.customerName.trim()) {
      newErrors.customerName = "Customer name is required";
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (formData.phone.length < 10 || !/^\d+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }


    if (["Google Pay", "PhonePe", "Paytm"].includes(formData.paymentMethod) && !formData.upiId) {
      toast.error("Please enter a valid UPI ID or phone number for online payment.");
      return;
    }

    if (formData.paymentMethod === "Cash" && formData.paymentStatus !== "Completed") {
      toast.error("Please click 'Paid' before confirming the booking.");
      return;
    }


    const formattedPrice = (Number(selectedHotel.price.toString().replace(/[^0-9.]/g, '')) * 10000).toFixed(0);
    const paymentStatus = formData.paymentMethod === "Cash" ? formData.paymentStatus : "Completed";

    const bookingDetails = {
      customerName: formData.customerName,
      email: formData.email,
      phone_number: formData.phone,
      hotelName: selectedHotel.name,
      location: selectedHotel.location,
      checkIn: formData.checkIn,
      checkOut: formData.checkOut,
      guests: Number(formData.guests),
      paymentMethod: formData.paymentMethod,
      paymentStatus,
      price: formattedPrice,
    };

    try {
      console.log("📤 Sending booking details:", bookingDetails);

      const response = await axios.post("http://localhost:5000/api/book-hotel", bookingDetails, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("✅ API Response:", response.data);

      if (response.data.pdfDownloadLink) {
        window.open(response.data.pdfDownloadLink, "_blank");
        toast.success("Booking Confirmed");
      } else {
        toast.error("Booking confirmed, but receipt download failed.");
      }

      setFormData((prev) => ({ ...prev, paymentStatus }));

      if (typeof onClose === "function") {
        onClose();
      }
    } catch (error) {
      console.error("❌ Error confirming booking:", error);
      toast.error(error.response?.data?.message || "Something went wrong.");
    }

    setIsBooking(false);



    // e.preventDefault();

    // setError(null);
    // setSuccessMessage(null);

    // setIsSubmitting(true);

    // if (!formData.location || !formData.checkIn || !formData.checkOut || !formData.guests) {
    //   setError('All fields are required.');
    //   setIsSubmitting(false);
    //   return;
    // }

    // if (new Date(formData.checkOut) <= new Date(formData.checkIn)) {
    //   setError('Check-out date must be after check-in date.');
    //   setIsSubmitting(false);
    //   return;
    // }

    // const existingBooking = await checkForExistingBooking(formData);
    // if (existingBooking) {
    //   setError('This booking already exists.');
    //   setIsSubmitting(false);
    //   return;
    // }

    // try {
    //   const response = await axios.post('http://localhost:5001/api/bookings', formData);
    //   console.log('Booking saved:', response.data);

    //   setSuccessMessage(response.data.message || 'Booking successful!');

    //   setFormData({
    //     location: '',
    //     checkIn: '',
    //     checkOut: '',
    //     guests: 1,
    //   });
    // } catch (err) {
    //   console.error('Error submitting form:', err);

    //   if (err.response) {
    //     setError(err.response.data.message || 'Failed to save booking. Please try again.');
    //   } else {
    //     setError('Network error. Please check your connection or try again later.');
    //   }
    // } finally {
    //   setIsSubmitting(false);
    // }

    const filteredHotels = allHotels.filter((hotel) =>
      hotel.location.toLowerCase().includes(formData.location.toLowerCase())
    );

    setHotels(filteredHotels);
    setShowResults(true);





  }


  const handlePaymentChange = (method) => {
    setFormData((prevData) => ({
      ...prevData,
      paymentMethod: method,
      paymentStatus: method === "Cash" ? "Pending" : "Completed",
      isPaid: method !== "Cash",
    }));
  };



  const checkForExistingBooking = async (formData) => {
    try {
      const response = await axios.get('http://localhost:5001/api/bookings', {
        params: { location: formData.location, checkIn: formData.checkIn, checkOut: formData.checkOut }
      });
      return response.data.length > 0;
    } catch (err) {
      console.error('Error checking for existing booking:', err);
      return false;
    }

  };
  const handleScrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };


  const sendHotelData = async () => {
    const [selectedHotel, setSelectedHotel] = useState('');

    const hotelData = [
      {
        name: 'JW Marriott Hotel',
        image_url: '/path/to/image/Jw.jpg',
        description: 'JW Marriott Hotel Pune. Situated between the airport and Mumbai-Pune Expressway',
        button_text: 'Book Now'
      },
      {
        name: 'Hotel Sheraton Garden',
        image_url: '/path/to/image/Sgg.jpg',
        description: 'Sheraton Grand Pune Bund Garden Hotel is a five-star Brand Hotel with all facilities',
        button_text: 'Book Now'
      },
      {
        name: 'The Ritz-Carlton',
        image_url: '/path/to/image/Ritz.jpg',
        description: 'The Ritz-Carlton, Pune reflects the classic glamour of a sophisticated urban retreat.',
        button_text: 'Book Now'
      },
      {
        name: 'The Westin Hotel',
        image_url: '/path/to/image/westin.jpg',
        description: 'The Westin Pune Koregaon Park offers a 5-star retreat in a commercial establishment',
        button_text: 'Book Now'
      },
      {
        name: 'Marriott Suites Pune',
        image_url: '/path/to/image/marriott.jpg',
        description: 'Luxury getaways in Pune, India, begin at Marriott Suites Pune.',
        button_text: 'Book Now'
      },
      {
        name: 'Courtyard Hotel',
        image_url: '/path/to/image/Hinj.jpg',
        description: 'Experience a sophisticated retreat at Courtyard by Marriott Pune, Hinjewadi.',
        button_text: 'Book Now'
      }
    ];


    const handleBookNow = () => {
      setIsBooked(true);
    };



    const handleCheckboxChange = (e, method) => {
      const isChecked = e.target.checked;

      if (method === 'googlePay' && isChecked) {
        setPaymentMethods({ googlePay: true, phonePe: false, paytm: false });
        setSelectedPaymentMethod('googlePay');
      } else if (method !== 'googlePay') {
        setPaymentMethods(prevState => ({
          ...prevState,
          [method]: false,
        }));
      }
    };


    const handleConfirmBooking = () => {
      if (!selectedPaymentMethod) {
        alert("Please select a payment method");
        return;
      }
      setPaymentSuccess(true);
    };

    const sendHotelData = async () => {
      try {
        const response = await axios.post("http://localhost:5000/hotels", {
          name: "Hotel Sheraton Garden",
          image_url: "/path/to/image/Sgg.jpg",
          description: "Sheraton Grand Pune Bund Garden Hotel is a five-star Brand Hotel with all facilities",
          button_text: "Book Now"
        });

        console.log("Hotel data sent successfully:", response.data);
      } catch (error) {
        if (error.response) {
          console.error("Error Response:", error.response.data);
        } else if (error.request) {
          console.error("No response received:", error.request);
        } else {
          console.error("Error Message:", error.message);
        }
      }
    };

    sendHotelData();
  }

  // const [paymentMethods, setPaymentMethods] = useState({
  //   googlePay: false,
  //   phonePe: false,
  //   paytm: false,
  // });

  // // Handle "Book Now" button click
  // const handleBookNow = () => {
  //   setIsBooked(true); // Show payment options
  // };

  // // Handle checkbox change (to select payment method)
  // const handleCheckboxChange = (event) => {
  //   const { name, checked } = event.target;
  //   setPaymentMethods((prevMethods) => ({
  //     ...prevMethods,
  //     [name]: checked,
  //   }));
  // };

  // // Confirm booking and simulate payment
  // const handleConfirmBooking = () => {
  //   // Find the selected payment method
  //   const selectedMethod = Object.keys(paymentMethods).find(
  //     (method) => paymentMethods[method]
  //   );

  //   if (selectedMethod) {
  //     setSelectedPaymentMethod(selectedMethod);
  //     // Simulate a payment success after a delay
  //     setTimeout(() => {
  //       setPaymentSuccess(true); // Simulating successful payment
  //     }, 2000); // Simulating a delay for payment
  //   } else {
  //     alert("Please select a payment method.");
  //   }
  // };
  const validatePhoneNumber = (value, country) => {
    const numberWithoutCode = value.replace(/^\+\d{1,3}/, "");

    if (country?.countryCode === "in") {
      if (numberWithoutCode.length < 10) {
        setError("");
      } else if (!/^[6-9][0-9]{9}$/.test(numberWithoutCode)) {
        setError("❌ Enter a valid 10-digit Indian number.");
      } else {
        setError("");
      }
    } else {
      if (numberWithoutCode.length < 6) {
        setError("");
      } else if (numberWithoutCode.length > 14) {
        setError("❌ Too many digits. Enter a valid number.");
      } else {
        setError("");
      }
    }
  };



  const handlePhoneChange = (value, country) => {
    setFormData((prevData) => ({
      ...prevData,
      phone: value,
    }));

    setPhone(value);
    validatePhoneNumber(value, country);

    handleChange({ target: { name: "phone", value } }); // Pass value to parent

    setErrors((prevErrors) => ({
      ...prevErrors,
      phone: "",
    }));
  };


  return (
    <div>
      <div className="co position-absolute top-0 left-0 width-100 height-100 m-0 p-0 overflow-visible mt-4">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"

        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2000">
              <img
                src={banner}
                className="d-block w-100 h-100 object-fit-cover"
                alt="banner"
              />
              <h1 className='titles'>Welcome to Hotel <br />Royal Palace</h1>

            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src={star}
                className="d-block w-100 h-100 object-fit-cover"
                alt="star"
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

        <div className="header  justify-content-between align-items-center px-4">
          <img src={Logo} className="logo fs-5 fw-bold" alt="Logo" />
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


        {/* // Booking Section // */}

        <div className="booking__container d-flex justify-content-start p-4">
          <form className="d-flex align-items-center gap-3 w-100" onSubmit={handleSubmit}>
            <div className="form__group flex-grow-1 ms-3">
              <input
                type="text"
                className="form-control text-center"
                placeholder="Enter location"
                name="location"
                value={formData.location}
                onChange={(e) => {
                  handleChange(e);
                  setSearchTerm(e.target.value);
                }}
                required
              />
              <p className="text-muted">Where are you going?</p>
            </div>

            <div className="form__group flex-grow-1 ms-3">
              <input
                type="date"
                className="form-control"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                required
              />
              <p className="text-muted">Check In</p>
            </div>

            <div className="form__group flex-grow-1 ms-3">
              <input
                type="date"
                className="form-control"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                required
              />
              <p className="text-muted">Check Out</p>
            </div>

            <div className="form__group flex-grow-1 ms-3">
              <input
                type="number"
                className="form-control text-center"
                placeholder="Guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
              />
              <p className="text-muted">Add guests</p>
            </div>
            <div className="btnnn">
              <button type="submit" className="btn btn-primary">Search</button>
            </div>
          </form>
        </div>


        {showResults && (
          <div
            className="modal fade show"
            tabIndex="-1"
            style={{ display: 'block' }}
            aria-hidden="false"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="bookingModalLabel">
                    Available Hotels in {formData.location}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={() => setShowResults(false)}
                  ></button>
                </div>

                <div className="modal-body">
                  {filteredHotels.length > 0 ? (
                    filteredHotels.map((hotel, index) => (
                      <div key={index} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', borderRadius: '5px' }}>
                        {/* <h3>{hotel.name}</h3> */}
                        <img
                          src={hotel.img}
                          alt={hotel.name}
                          style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                        />
                        <h3 className="text-start fw-bold text-primary ">{hotel.name}</h3>
                        <p className="text-start">
                          <strong>
                            <span className="fw-bold ">Location:</span>
                            <span className="fw-italic text-success"> {hotel.location}</span>
                          </strong>
                        </p>
                        <p className="text-start">
                          <strong>
                            <span className="fw-bold">Price:</span>
                            <span className="fw-italic text-success"> {hotel.price.replace(/[^\d]/g, '')}</span>
                          </strong>
                        </p>
                        <button className="btn btn-primary mt-3" onClick={() => handleBookNow(hotel)}>
                          Book Now
                        </button>
                      </div>
                    ))
                  ) : (
                    <p>No hotels found.</p>
                  )}

                  <ToastContainer position="top-center" autoClose={3000} />

                  {isBooking && selectedHotel && (
                    <div className="modal show d-block" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                      <div className="modal-dialog">
                        <div className="modal-content p-4">
                          <h3>Booking Form</h3>
                          <form>
                            <div className="mb-3 text-start">
                              <label className="text-left mb-2 fs-4 fw-normal">Customer Name</label>
                              <input type="text" name="customerName" className="form-control" onChange={handleChange} required />
                            </div>
                            <div className="mb-3 text-start">
                              <label className="text-left mb-2 fs-4 fw-normal">Email</label>
                              <input type="email" name="email" className="form-control" onChange={handleChange} required />
                              {errors.email && (
                                <small className="text-danger d-inline-block mt-1">{errors.email}</small>
                              )}
                            </div>
                            <div className="mb-3 text-start">
                              <label className="text-left mb-2 fs-4 fw-normal">Phone Number</label>
                              <PhoneInput
                                country={"in"}
                                value={phone}
                                onChange={handlePhoneChange}
                                inputProps={{
                                  name: "phone",
                                  required: true,
                                }}
                                enableSearch={true}
                                autoFormat={true}
                                containerStyle={{ width: "100%" }}
                                inputStyle={{ width: "100%" }}
                              />
                              {errors.phone && (
                                <div className="mt-2">
                                  <small className="text-warning d-block">{errors.phone}</small>
                                </div>
                              )}
                            </div>
                            <div className="mb-3 text-start">
                              <label className="text-left mb-2 fs-4 fw-normal">Hotel Name</label>
                              <input type="text" className="form-control" value={selectedHotel.name} disabled />
                            </div>
                            <div className="mb-3 text-start">
                              <label className="text-left mb-2 fs-4 fw-normal">Location</label>
                              <input type="text" className="form-control" value={selectedHotel.location} disabled />
                            </div>
                            {/* <h4>Select Payment Method</h4>
                            {["Cash", "Google Pay", "PhonePe", "Paytm"].map((method) => (
                              <div key={method} className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="paymentMethod"
                                  value={method}
                                  checked={formData.paymentMethod === method}
                                  onChange={() =>
                                    setFormData((prev) => ({
                                      ...prev,
                                      paymentMethod: method,
                                      paymentStatus: method === "Cash" ? "Pending" : "Completed",
                                      upiId: "",
                                      phoneNumber: "",
                                    }))
                                  }
                                />
                                <label className="form-check-label">{`Pay with ${method}`}</label>
                              </div>
                            ))} */}

                            <button
                              className="btn btn-success fs-5 ms-2 me-3"
                              type="button"
                              onClick={() => setSelectedPaymentButton("payNow")}
                            >
                              Pay Now
                            </button>

                            <button
                              className="btn btn-warning fs-5 text-white"
                              type="button"
                              onClick={() => setSelectedPaymentButton("payHotel")}
                            >
                              Pay at Hotel
                            </button>

                            {selectedPaymentButton && (
                              <div className="mt-3">
                                <label>Select Payment Method</label>
                                <select
                                  className="form-control"
                                  value={formData.paymentMethod}
                                  onChange={(e) =>
                                    setFormData((prev) => ({ ...prev, paymentMethod: e.target.value }))
                                  }
                                >
                                  <option value="">Select</option>
                                  {selectedPaymentButton === "payNow" ? (
                                    <>
                                      <option value="Google Pay">Google Pay</option>
                                      <option value="PhonePe">PhonePe</option>
                                      <option value="Paytm">Paytm</option>
                                    </>
                                  ) : (
                                    <>
                                      <option value="Google Pay">Google Pay</option>
                                      <option value="PhonePe">PhonePe</option>
                                      <option value="Paytm">Paytm</option>
                                      <option value="Credit/Debit Card">Credit/Debit Card</option>
                                      <option value="Wallets">Wallets</option>
                                      <option value="Net Banking">Net Banking</option>
                                    </>
                                  )}
                                </select>

                                {["Google Pay", "PhonePe", "Paytm"].includes(formData.paymentMethod) && (
                                  <div className="mb-3 mt-2">
                                    <label>Enter UPI ID or Phone Number</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter UPI ID or Phone Number"
                                      value={formData.upiId || ""}
                                      onChange={(e) =>
                                        setFormData((prev) => ({
                                          ...prev,
                                          upiId: e.target.value,
                                        }))
                                      }
                                      required
                                    />
                                  </div>
                                )}

                              </div>
                            )}

                            {formData.paymentMethod === "Cash" && formData.paymentStatus === "Pending" && (
                              <button
                                className="btn btn-success mt-3"
                                type="button"
                                onClick={() =>
                                  setFormData((prev) => ({ ...prev, paymentStatus: "Completed", isPaid: true }))
                                }
                              >
                                Paid
                              </button>
                            )}

                            {selectedPaymentButton && (
                              <button
                                className="btn btn-primary mt-3"
                                type="button"
                                onClick={handleConfirmBooking}
                                disabled={!formData.paymentMethod || (formData.paymentMethod === "Cash" && !formData.isPaid)}
                              >
                                Confirm Booking
                              </button>
                            )}

                            <button className="btn btn-danger fs-5 ms-3 mt-3" type="button" onClick={() => setIsBooking(false)}>
                              Cancel
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  )}

                </div>

                {paymentSuccess && (
                  <div className="modal-body">
                    <h5>Booking Successful</h5>
                    <p>
                      Your booking has been confirmed : {selectedPaymentMethods.join(', ')}
                    </p>
                    <button
                      className="btn btn-secondary"
                      onClick={() => setPaymentSuccess(false)}
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )
        }
      </div >


      <div className="Popular-Hotel mt-5">
        <h3 className="text-center fw-bold mb-4 px-3">POPULAR HOTELS</h3>
        <div className='d-flex ms-5 justify-content-center'>
          <div className="col">
            <div className="card" style={{ width: '18rem' }}>
              <img src={Jw} className="card-img-top" alt="Jw" />
              <div className="card-body">
                <h5 className="card-title">JW Marriott Hotel</h5>
                <div className="text-start mb-2 ">
                  <i class="bi bi-geo-alt-fill"></i>
                  <span className="ms-2">Pune</span>
                </div>
                <p className="card-text text-start">JW Marriott Hotel Pune. Situated between the airport and Mumbai-Pune Expressway </p>

                <button className="bttn ">Book Now</button>

              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: '18rem' }}>
              <img src={Sgg} className="card-img-top" alt="Sgg" />
              <div className="card-body">
                <h5 className="card-title text-start"> Hotel Sheraton Garden
                </h5>
                <div className="text-start mb-2 ">
                  <i class="bi bi-geo-alt-fill"></i>
                  <span className="ms-2">Pune</span>
                </div>

                <p className="card-text text-start">Sheraton Hotels & Resorts, a Marriott International brand, offers mid- to upscale  </p>
                <button className="bttn ">Book Now</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: '18rem' }}>
              <img src={Saharas} className="card-img-top" alt="Ritz" />
              <div className="card-body">
                <h5 className="card-title">Hotel Sahara Star
                </h5>
                <div className="text-start mb-2 ">
                  <i class="bi bi-geo-alt-fill"></i>
                  <span className="ms-2">Mumbai</span>
                </div>
                <p className="card-text text-start"> Star in Mumbai is  5-star luxury hotel near the domestic airport renowned for its pillar-less </p>
                <button className="bttn ">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div class="containe text-center ms-5 mt-5">
        <div class="row">
          <div class="col">
            <div className="card" style={{ width: '18rem' }}>
              <img src={westin} className="card-img-top" alt="Urban Oasis" />
              <div className="card-body">
                <h5 className="card-title">The Westin Hotel</h5>
                <div className="text-start mb-2 ">
                  <i class="bi bi-geo-alt-fill"></i>
                  <span className="ms-2">Mumbai</span>
                </div>
                <p className="card-text text-start">The Westin Mumbai Garden City is a 5-star hotel located in Goregaon East, offering a contemporary and luxurious  </p>
                <button className="bttn ">Book Now</button>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="card" style={{ width: '18rem' }}>
              <img src={marriott} className="card-img-top" alt="marriott" />
              <div className="card-body">
                <h5 className="card-title">The LaLiT New Delhi</h5>
                <div className="text-start mb-2 ">
                  <i class="bi bi-geo-alt-fill"></i>
                  <span className="ms-2">New Delhi</span>
                </div>
                <p className="card-tex text-start">a luxurious, art-inspired, 5-star hotel in the heart of New Delhi's commercial and business district. </p>
                <button className="bttn ">Book Now</button>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="card" style={{ width: '18rem' }}>
              <img src={hyatt} className="card-img-top" alt="Hinj" />
              <div className="card-body">
                <h5 className="card-title">Hyatt Regency Delhi
                </h5>
                <div className="text-start mb-2 ">
                  <i class="bi bi-geo-alt-fill"></i>
                  <span className="ms-2">Delhi</span>
                </div>
                <p className="card-text text-start">The Hyatt Regency Delhi is a luxurious, five-star hotel in Delhi's commercial hub, Bhikaji Cama Place, near.  </p>
                <button className="bttn ">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="cont text-center mt-5 ms-4">
        <div className='text-center '>
          <h4 className='fw-bold fs-2'>Gallery</h4>
        </div>
        <div class="row align-items-start mt-5">
          <div class="col">
            <img src={Beverely} className='ig' alt='Beverely' />
          </div>
          <div class="col">
            <img src={Most} className='ig' alt='Most' />
          </div>
          <div class="col">
            <img src={resorts} className='ig' alt='resorts' />
          </div>
          <div class="col">
            <img src={decor} className='ig' alt='decor' />
          </div>
        </div>
      </div>
      <div class="conts text-center mt-5 ms-4">
        <div class="row align-items-start">
          <div class="col">
            <img src={bedroom} className='ig' alt='bedroom' />
          </div>
          <div class="col">
            <img src={diseney} className='ig' alt='diseney' />
          </div>
          <div class="col">
            <img src={vector} className='ig' alt='vector' />
          </div>
          <div class="col">
            <img src={stock} className='ig' alt='stok' />
          </div>
        </div>
      </div>


      <div className="contars text-center  mt-5 mb-5 ">
        <h2 className="text-center fw-bold mb-4 px-3">What Our Client Say</h2>
        <div id="clientCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {groupedTestimonials.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className={`carousel-item ${groupIndex === 0 ? "active" : ""}`}
              >
                <div className="d-flex justify-content-center mt-4 mb-5">
                  {group.map((client, index) => (
                    <div
                      key={index}
                      className="d-flex align-items-center shadow p-4 bg-body-tertiary rounded mx-2"
                      style={{ width: "45%" }}
                    >
                      <img
                        src={client.image}
                        className="rounded-circle me-4"
                        style={{ width: "80px", height: "80px" }}
                        alt={client.name}
                      />
                      <div>
                        <p className="mb-1 fw-bold">{client.name}</p>
                        <p className="mb-0">{client.feedback}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#clientCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#clientCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button> */}
        </div>
      </div>




      <footer
        className="footer d-block w-100 justify-content-center mt-5"
        id="contact"
        style={{ minHeight: '300px', margin: 0, padding: 0 }}
      >
        <div className="bg-black text-light">
          <div className="w-100">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 gy-4 py-4 px-5 mx-0">
              <div className="col">
                <div className="d-flex flex-column" style={{ lineHeight: '1.8' }}>
                  <img src={Logo} className="lk mx-5" alt="Logo" />
                  <p className="text-secondary text-justify">
                    Royal Hotel offers a luxurious and <br /> unforgettable experience. <br />
                    From elegant rooms and state-of-the-art facilities to exceptional service.
                  </p>
                </div>
              </div>

              <div className="col py-4">
                <h5 className="text-white">QUICK LINKS</h5>
                <ul className="list-unstyled mt-3" style={{ lineHeight: '1.8' }}>
                  <li>
                    <Link className="quick-link" to="/Home">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="quick-link" to="/Aboutus">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className="quick-link" to="/Blog">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link className="quick-link" to="/Contactus">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link className="quick-link" to="/Service">
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
                <div className="d-flex mx-5 ms-5 px-3">
                  <a href="#" className="fs-3 me-3 text-primary cursor-pointer" aria-label="Facebook">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </a>
                  <a href="#" className="fs-3 me-3 text-danger cursor-pointer" aria-label="Instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="#" className="fs-3 me-3 text-white cursor-pointer" aria-label="YouTube">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                  <a href="#" className="fs-3 text-info cursor-pointer" aria-label="Twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center py-2 bg-dark text-light w-100 m-0">
          Copyright © 2024 Web Design Mastery. All rights reserved.
        </div>
      </footer>
    </div >








  )
}

export default Home