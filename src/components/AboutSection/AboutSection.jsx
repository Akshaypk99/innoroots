import React from 'react'
import './AboutSection.scss'
import FadeInView from '../FadeInView/FadeInView'
import { useNavigate } from 'react-router-dom'
import aboutImage from "../../assets/images/home/about.jpg";
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const AboutSection = ({ source }) => {
  const navigate = useNavigate()
  return (
    <div className='about-us-section'>
      <div className='content'>
        <FadeInView>
          <div className='main-title'>ABOUT US</div>
        </FadeInView>
        <FadeInView>
          {source === 'home' ?
            <p>InnoRootsAI is a pioneering initiative in robotics and AI education, dedicated to fostering innovation, creativity, and technological expertise. As a provider of comprehensive training solutions, we aim to equip individuals and communities with the skills and knowledge needed to thrive in the rapidly evolving fields of robotics and artificial intelligence. At InnoRoots, we believe that technology should be an enabler for everyone, regardless of background or expertise.</p>
            :
            <p>
              InnoRootsAI is a pioneering initiative in robotics and AI education, dedicated to fostering
              innovation, creativity, and technological expertise. As a provider of comprehensive training
              solutions, we aim to equip individuals and communities with the skills and knowledge needed to
              thrive in the rapidly evolving fields of robotics and artificial intelligence.
              At InnoRootsAI, we believe that technology should be an enabler for everyone, regardless of
              background or expertise. We are committed to democratizing access to cutting-edge education
              and resources, empowering learners to tackle real-world challenges and contribute meaningfully
              to society.
              <br/>
              <br/>
              Our mission is to bridge the gap between theoretical knowledge and practical applications,
              ensuring that our students not only understand advanced concepts but also excel in
              implementing them. Through hands-on workshops, project-based learning, and mentorship, we
              inspire curiosity and drive innovation.
              <br/>
              <br/>
              One of our core objectives is to solve pressing problems in industries like agriculture,
              healthcare, and dairy farming, leveraging the power of robotics and AI. By blending research,
              education, and application, we nurture the next generation of problem solvers, innovators, and
              leaders who are ready to shape the future.
              Join us at InnoRootsAI to explore, learn, and innovate—where technology meets possibility, and
              dreams meet reality.
            </p>
          }
        </FadeInView>
        {source === 'home' &&
          <PrimaryButton text={'Learn More'} onClick={() => navigate('/about-us')} />
        }
      </div>
      <div className='img-container'>
        <img src={aboutImage} alt='about-us' />
      </div>
    </div>
  )
}

export default AboutSection
