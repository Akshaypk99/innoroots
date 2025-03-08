import React from 'react'
import './CourseDetailsBanner.scss'

const CourseDetailsBanner = ({ course }) => {
  return (
    <div className={`course-details-banner`}
      style={{
        backgroundImage: `url(${window.innerWidth < 678 ? course.banner_img_mob : course.banner_img})`,
      }}>
      <div className="container">
        <div className='title'>
          {course.title}
          {/* AN INVITATION TO <br /> DREAM BIGGER */}
        </div>
      </div>
    </div>
  )
}

export default CourseDetailsBanner
