import React, { useEffect } from 'react'
import './AboutUs.scss'
import FadeInView from '../../components/FadeInView/FadeInView'
import Banner from '../../components/Banner/Banner'
import AboutSection from '../../components/AboutSection/AboutSection'
import OfferingsSection from '../../components/OfferingsSection/OfferingsSection'
import MissionVision from '../../components/MissionVision/MissionVision'
import CourseIntroSection from '../../components/CourseIntroSection/CourseIntroSection'


const AboutUs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className='about-us-page'>
      <Banner page={'about'} />

      <div className='sec-2'>
        <div className='container mx-auto'>
          <AboutSection />
        </div>
        <MissionVision />
        <OfferingsSection />
      </div>

      <div className='sec-3'>
        <CourseIntroSection />
      </div>

    </div>
  )
}

export default AboutUs
