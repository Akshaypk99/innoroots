import React, { useEffect, useState } from 'react'
import './ContactUs.scss'
import Banner from '../../components/Banner/Banner'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'


const ContactUs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    place: "",
    email: "",
    phone: "",
    message: "",
  });
  const googleFormURL = import.meta.env.VITE_GOOGLE_FORM_URL;
  const nameEntry = import.meta.env.VITE_NAME_ENTRY;
  const emailEntry = import.meta.env.VITE_EMAIL_ENTRY;
  const messageEntry = import.meta.env.VITE_MESSAGE_ENTRY;


  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.place.trim()) newErrors.place = "Place is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Contact Number is required";
    } else if (!/^\d{10,}$/.test(formData.phone)) {
      newErrors.phone = "Contact Number must be at least 10 digits";
    }

    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Call validateForm() before submitting the form
  const handleSubmit = (e) => {

    console.log(googleFormURL);
    
    e.preventDefault();
    if (validateForm()) {
      // Proceed with submission
      const formDataToSend = new FormData();
      formDataToSend.append("entry.123456789", formData.name); // Replace with actual entry ID
      formDataToSend.append("entry.987654321", formData.email);
      formDataToSend.append("entry.567890123", formData.message);

      fetch(googleFormURL, {
        method: "POST",
        body: formDataToSend,
        mode: "no-cors",
      }).then(() => {
        // alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }).catch(() => alert("Error sending message."));
    }
    else {
      console.log(errors);

    }
  };



  return (
    <div className='contact-us-page'>
      <Banner page={'contact'} />

      <div className='sec-2'>
        <div className="container">
          <div className='contact-form'>
            <div className='main-title'>
              SHARE YOUR DETAILS
            </div>
            <div className='form-section'>
              <form >
                {/* Name & Place in One Row */}
                <div className='row'>
                  <div className="col-lg-6 form-group">
                    <input type="text" id="name" placeholder=" "
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required />
                    <label htmlFor="name">Name</label>
                    {errors.name && <div className="error">{errors.name}</div>}
                  </div>
                  <div className="col-lg-6 form-group">
                    <input type="text" id="place" placeholder=" "
                      value={formData.place}
                      onChange={(e) => setFormData({ ...formData, place: e.target.value })}
                      required />
                    <label htmlFor="place">Place</label>
                    {errors.place && <div className="error">{errors.place}</div>}
                  </div>
                </div>

                {/* Email & Contact Number in One Row */}
                <div className='row'>
                  <div className="col-lg-6 form-group">
                    <input type="email" id="email" placeholder=" "
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required />
                    <label htmlFor="email">Email</label>
                    {errors.email && <div className="error">{errors.email}</div>}
                  </div>
                  <div className="col-lg-6 form-group">
                    <input type="tel" id="phone" placeholder=" "
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required />
                    <label htmlFor="phone">Contact Number</label>
                    {errors.phone && <div className="error">{errors.phone}</div>}
                  </div>
                </div>
                {/* Message Textarea */}
                <div className='row'>
                  <div className="form-group last">
                    <textarea id="message" placeholder=" " required rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                    <label htmlFor="message">Message</label>
                    {errors.message && <div className="error">{errors.message}</div>}

                  </div>
                </div>
              </form>
              <div className="row">
                <div className="form-group m-0">
                  <div className='btn-container mobile'>
                    <PrimaryButton text={'SUBMIT'} onClick={handleSubmit} />
                  </div>
                </div>
              </div>
              <div className='contact-info'>
                <div className="item">
                  <div className="title">
                    Call Us
                  </div>
                  <div className="value ">
                    <div className="">
                      +91 97445 53975
                    </div>
                    <div className="">
                      +91 97445 53926
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="title">
                    Mail Us
                  </div>
                  <div className="value">
                    innorootsai@gmail.com
                  </div>
                </div>
              </div>
            </div>
            <div className='btn-container'>
              <div className="row">
                <div className="form-group m-0">
                  <PrimaryButton text={'SUBMIT'} onClick={handleSubmit} />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
      <div className="sec-3">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.7007709643512!2d76.42880607480811!3d10.985943589175836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7d5a1bd894c5f%3A0xcdfbc13c0900549d!2sInfolks%20Head%20Office!5e0!3m2!1sen!2sin!4v1740573673003!5m2!1sen!2sin"
            width="100%"
            height="600"
            className="contact-map"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
