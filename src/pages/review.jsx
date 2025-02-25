import React, { useState } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import rImg from '../assets/images.png';
import bImg from '../assets/review.jpg';
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
const ReviewPage = () => {
  const [completedReviews, setCompletedReviews] = useState([]);
  const [pendingReviews, setPendingReviews] = useState(["John Doe", "Jane Smith"]);
  const [newReview, setNewReview] = useState({ employee: "", feedback: "" });

  const handleReviewSubmit = () => {
    if (newReview.employee && newReview.feedback) {
      setCompletedReviews([...completedReviews, newReview]);
      setPendingReviews(pendingReviews.filter((emp) => emp !== newReview.employee));
      setNewReview({ employee: "", feedback: "" });
    }
  };

  return (
    <>
      {/* Navbar */}
      <Navbar className="bg-white shadow-md p-0 m-0">
        <Container fluid>
          <Navbar.Brand href="/" className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3674B5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8"
            >
              <path d="M12 2L2 22h20L12 2z" />
              <path d="M12 6l6 12H6l6-12z" />
            </svg>
            <h1 className="text-2xl font-bold text-[#3674B5] ml-2">SkillScale</h1>
          </Navbar.Brand>
          <Nav className="ml-auto flex items-center">
            <Nav.Link href="/home" className="text-gray-700 hover:text-blue-500 px-3">HOME</Nav.Link>
            <Nav.Link href="/goal" className="text-gray-700 hover:text-blue-500 px-3">GOAL</Nav.Link>
            <Nav.Link href="/feedback" className="text-gray-700 hover:text-blue-500 px-3">FEEDBACK</Nav.Link>
            <Nav.Link href="/Appraisal" className="text-gray-700 hover:text-blue-500 px-3">APPRAISAL DASHBOARD</Nav.Link>
            <Nav.Link href="/Analytics" className="text-gray-700 hover:text-blue-500 px-3">ANALYTICS AND REP</Nav.Link>
            
            <NavDropdown
                          title={
                            <img
                              src={rImg} // Replace with actual image URL
                              alt="Profile"
                              className="rounded-full"
                              width="40"
                              height="40"
                            />
                          }
                          id="basic-nav-dropdown"
                          align="end"
                        >
                          <NavDropdown.Item href="#profile" className="text-gray-700 hover:bg-gray-100">Profile</NavDropdown.Item>
                          <NavDropdown.Item href="/login" className="text-gray-700 hover:bg-gray-100">Logout</NavDropdown.Item>
                        </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      
      {/* Review Section */}
      <div className="bg-cover bg-center min-h-screen relative pt-4 "
          style={{ backgroundImage: `url(${bImg})` }}>
        <h2 className="text-2xl font-bold text-center text-[#3674B5] mb-6 pb-4">Employee Reviews</h2>
        <div className="grid grid-cols-3 gap-6 pl-4 pr-4">
          {/* Add Review */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold text-[#3674B5] mb-4">Add Review</h3>
            <select
              className="w-full p-2 border border-gray-300 rounded mb-4"
              value={newReview.employee}
              onChange={(e) => setNewReview({ ...newReview, employee: e.target.value })}
            >
              <option value="">Select Employee</option>
              {pendingReviews.map((emp, index) => (
                <option key={index} value={emp}>{emp}</option>
              ))}
            </select>
            <textarea
              className="w-full p-2 border border-gray-300 rounded mb-4"
              placeholder="Write your review here..."
              value={newReview.feedback}
              onChange={(e) => setNewReview({ ...newReview, feedback: e.target.value })}
            ></textarea>
            <button
              className="w-full bg-[#3674B5] text-white py-2 rounded-lg"
              onClick={handleReviewSubmit}
            >Submit Review</button>
          </div>

          {/* Completed Reviews */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold text-[#3674B5] mb-4">✅Completed Reviews</h3>
            {completedReviews.length > 0 ? (
              <ul>
                {completedReviews.map((review, index) => (
                  <li key={index} className="border-b py-2">{review.employee}: {review.feedback}</li>
                ))}
              </ul>
            ) : (
              <p>No reviews completed yet.</p>
            )}
          </div>

          {/* Pending Reviews */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold text-[#3674B5] mb-4">📅Pending Reviews</h3>
            {pendingReviews.length > 0 ? (
              <ul>
                {pendingReviews.map((emp, index) => (
                  <li key={index} className="border-b py-2">{emp}</li>
                ))}
              </ul>
            ) : (
              <p>All reviews completed!</p>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-2 items-center">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
              {/* Company Info */}
              <div>
                <h2 className="text-lg font-bold">SkillScale</h2>
                <p className="mt-2 text-gray-400">Empowering growth through continuous performance tracking.</p>
              </div>
      
              {/* Quick Links */}
              <div className="mb-6 items-center">
                  <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      
                      📧 info@skillscale.com
                    </li>
                    <li className="flex items-center">
                      
                      📞 6282645889
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">📍</span>
                      <span>CyberPark, Kozhikode, India</span>
                    </li>
                  </ul>
                </div>
      
              {/* Contact & Social */}
              <div className="items-center">
                <h3 className="text-lg font-semibold">Connect With Us</h3>
                <div className="mt-6 flex space-x-4 items-center">
                  <a href="https://facebook.com" className="text-gray-400 hover:text-white items-center"><FaFacebook size={20} /></a>
                  <a href="https://twitter.com" className="text-gray-400 hover:text-white"><FaTwitter size={20} /></a>
                  <a href="https://linkedin.com" className="text-gray-400 hover:text-white"><FaLinkedin size={20} /></a>
                  <a href="mailto:info@skillscale.com" className="text-gray-400 hover:text-white"><FaEnvelope size={20} /></a>
                </div>
              </div>
            </div>
            
            {/* Copyright */}
            <div className=" text-center text-gray-500 text-sm border-t border-gray-600 text-center">
              &copy; 2025 SkillScale. All Rights Reserved.
            </div>
          </footer>
          
    </>
  );
};

export default ReviewPage;