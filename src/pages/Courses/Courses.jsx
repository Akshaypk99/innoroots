import React, { useEffect } from 'react'
import './Courses.scss'
// import Banner from '../../components/Banner/Banner'
import OfferingsSection from '../../components/OfferingsSection/OfferingsSection'
import CourseCardSection from '../../components/CourseCardSection/CourseCardSection'
import CourseBanner from '../../components/CourseBanner/CourseBanner'


const Courses = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className='course-page'>
      <CourseBanner page={'courses'} />

      <div className='sec-2'>
        <OfferingsSection />
        <CourseCardSection />
      </div>
    </div>
  )
}

export default Courses
