import React, { useEffect } from 'react'
import './CourseDetails.scss'
import Banner from '../../components/Banner/Banner'
import FadeInView from '../../components/FadeInView/FadeInView'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import bulletIcon from '../../assets/images/icons/list-bullet.svg'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'
import COURSES from '../../constants/courses'
import CourseDetailsBanner from '../../components/CourseDetailsBanner/CourseDetailsBanner'

const CourseDetails = () => {
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const { id } = useParams(); // Get the course ID from the URL
  const course = COURSES.find((course) => course.id === id);
  if (!course) {
    return <Navigate to="/invalid-page" replace />; // Redirect if course is not found
  }
  const handleCallNow = () => {
    window.location.href = "tel:+919744553926"; // Replace with the actual phone number
  };

  return (
    <div className='course-details-page'>
      <CourseDetailsBanner course={course} />

      <div className='sec-2'>
        <div className="container mx-auto">
          <FadeInView>
            <div className='main-title'>
              {course.title.includes("Diploma in") ? (
                <>
                  Diploma in <br />
                  {course.title.replace("Diploma in ", "")}
                </>
              ) : (
                course.title
              )}
            </div>
          </FadeInView>
          <div className="container course-details-section">
            <div className="first-row">
              <div className="description">
                <div className="desc-title">
                  Course Description:
                </div>
                <p className='desc'>
                  {course.description}
                </p>
                <div className="mt-2">
                  <div className="sub-heading">
                    Key Benefits & Learning Outcomes:
                  </div>
                  <div className="key-list">
                    {course?.key_benefits.map((benefit, index) => (
                      <div className="item" key={index}>
                        <img src={bulletIcon} alt='icon' />
                        <p>{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="tech-stack">
                  <div className="sub-heading">
                    Tech Stacks Covered:
                  </div>
                  <div className="key-list">
                    {course?.tech_stacks.map((tech, index) => (
                      <div className="item" key={index}>
                        <img src={bulletIcon} alt='icon' />
                        <p>{tech}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="image-container">
                <img src={course.detail_img_url} alt={course.id} />
              </div>
            </div>

            <div className="second-row">
              <div className="form-section">
                <form >
                  <div className="form-group">
                    <input type="text" id="name" placeholder="Name" required />
                  </div>
                  <div className="form-group">
                    <input type="email" id="email" placeholder="Email" required />
                  </div>
                  <div className="form-group">
                    <input type="text" id="place" placeholder="Place" required />
                  </div>
                  <div className="form-group">
                    <input type="text" id="phone_number" placeholder="Contact Number" required />
                  </div>
                  <div className='btn-container'>
                    <PrimaryButton text={'SUBMIT'} />
                  </div>
                </form>
              </div>
              <div className="duration">
                <div className="item">
                  CLASS DURATION <br />
                  10 MONTHS
                </div>
                <div className="item">
                  ON JOB TRAINING <br />
                  12 MONTHS
                </div>
                {/* <div className="item">
                  TOTAL DURATION <br />
                  22 MONTHS
                </div> */}
                <div className="d-flex justify-content-center align-items-center">
                  <PrimaryButton text={'CONTACT US'} onClick={()=>navigate('/contact')} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CourseDetails
