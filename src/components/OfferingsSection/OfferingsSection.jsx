import React from 'react'
import './OfferingsSection.scss'
import FadeInView from '../FadeInView/FadeInView'
import TextTransition from '../TextTransition/TextTransition'

const OfferingsSection = () => {
  return (
    <div className='offerings-section'>
      <FadeInView>
        <div className='sub-title'>We are offering AI, ML and Robotic</div>
        <h5>COURSES</h5>
      </FadeInView>
      {/* <FadeInView>
            <p>
              Step into the forefront of intelligent technology with InnoRootsAI, your trusted provider for
              Robotics and AI training. Explore cutting-edge AI, Machine Learning, and Robotics courses,
              designed to spark innovation and empower learners at every level. At InnoRootsAI, we’re not just shaping minds—we’re shaping the future.
            </p>
          </FadeInView> */}
      <TextTransition
        text={"Step into the forefront of intelligent technology with InnoRootsAI, your trusted provider for Robotics and AI training. Explore cutting-edge AI, Machine Learning, and Robotics courses, designed to spark innovation and empower learners at every level. At InnoRootsAI, we’re not just shaping minds—we’re shaping the future."} />
    </div>
  )
}

export default OfferingsSection
