import React from 'react'
import './CourseCardSection.scss'
import { useNavigate } from 'react-router-dom'
import ExploreButton from '../ExploreButton/ExploreButton'
import COURSES from '../../constants/courses'


const CourseCardSection = () => {
  const navigate = useNavigate()

  return (
    <div className='course-card-container'>
      {COURSES?.map((item, index) => (
        <div className='course' key={index}>
          <div className="card"
          >
            <div className="title-section">
              <div className="main-title">
                {item.title}
              </div>
            </div>
            <div className="img-container">
              <img src={item.image_url} alt={index} />
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-2">
            <ExploreButton page={'courses'} text={'Explore Now'}
              onClick={() => navigate(`/courses/${item.id}`)}
            />
          </div>

        </div>
      ))}
    </div>
  )
}

export default CourseCardSection
