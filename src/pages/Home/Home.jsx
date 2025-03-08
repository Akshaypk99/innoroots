import React, { useEffect } from 'react'
import './Home.scss'
import FadeInView from '../../components/FadeInView/FadeInView'
import Banner from '../../components/Banner/Banner'
import AboutSection from '../../components/AboutSection/AboutSection'
import OfferingsSection from '../../components/OfferingsSection/OfferingsSection'
import CourseIntroSection from '../../components/CourseIntroSection/CourseIntroSection'
import IconSlider from '../../components/IconSlider/IconSlider'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import INDUSTRIAL_PARTNERS from '../../constants/industrialPartners'
import MILESTONES from '../../constants/milestones'
import CERTIFICATIONS from '../../constants/certifications'


const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);



  return (
    <div className='home-page'>
      <Banner page={'home'}/>

      <div className='sec-2'>
        <div className='container mx-auto'>
          <AboutSection source={'home'} />
        </div>
        <OfferingsSection />
      </div>
      <div className='sec-3'>
        <CourseIntroSection />
      </div>
      {/* milestones */}
      <div className='sec-4'>
        {/* <FadeInView> */}
        <div className="container">
          <div className='mile-stones'>
            {MILESTONES.map((item, index) => {
              const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
              return (
                <div className="item" key={index} ref={ref}>
                  <img src={item.img} alt={item.label} />
                  <div className="contents">
                    <div className="count">
                      {inView ? <CountUp start={0} end={item.count} duration={item.duration} /> : "0"}
                      {item.showPlus && "+"} {/* Only show "+" when `showPlus` is true */}
                    </div>
                    <div className="description">{item.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* </FadeInView> */}
      </div>
      <div className='sec-5'>
        <FadeInView>
          <div className='main-title'>INDUSTRIAL SUPPORT PARTNERS</div>
        </FadeInView>
        <div className='cross-div'>
          <div className='grey-div'>
            <IconSlider iconList={INDUSTRIAL_PARTNERS} direction={'right'} />
          </div>
          <div className='blue-div'>
            <IconSlider iconList={INDUSTRIAL_PARTNERS} direction={'left'} />
          </div>
        </div>
      </div>
      <div className='sec-6'>
        <FadeInView>
          <div className='main-title'>AFFILIATIONS & CERTIFICATIONS</div>
          <div className='sub-title'>Here are the prestigious affiliations and certifications we provide</div>
        </FadeInView>
        <div className='certificates'>
          {CERTIFICATIONS.map((item, idx) => (
            <img src={item.img} key={idx} alt={item.title} className={`img-${item.title}`} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
