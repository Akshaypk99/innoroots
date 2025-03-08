
import React from "react";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import AboutUs from "./pages/AboutUs/AboutUs";
import InvalidPage from "./pages/InvalidPage/InvalidPage";
import Courses from "./pages/Courses/Courses";
import ContactUs from "./pages/ContactUs/ContactUs";
import CourseDetails from "./pages/CourseDetails/CourseDetails";

const Layout = () => {
  return (
    < >
      <div className="app-content" >
        <NavBar />
        <Routes >
          {/* <Route index element={<Navigate to="/home" />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="courses" element={<Courses />} />
          <Route path="courses/:id" element={<CourseDetails />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="invalid-page" element={<InvalidPage />} />
          <Route path="*" element={<InvalidPage />} />

        </Routes >
        <Footer />
      </div>
    </>
  )
};


export default Layout;
