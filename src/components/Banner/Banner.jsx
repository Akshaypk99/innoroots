import React from 'react'
import './Banner.scss'
import bannerVideo from "../../assets/videos/banner-bg.mp4";
import bannerVideoSM from "../../assets/videos/banner-bg.mp4";

const Banner = ({ page }) => {
  return (
    <div className={`banner ${page}`}>
      {page === 'home' ?
        <div className="video-container">
          {/* Large Screen Video */}
          <video className="d-none d-md-block" autoPlay loop muted playsInline>
            <source src={bannerVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Small Screen Video */}
          <video className="d-block d-md-none" autoPlay loop muted playsInline>
            <source src={bannerVideoSM} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        :
        <div className="container">
          <div className='title'>
            AN INVITATION TO <br /> DREAM BIGGER
          </div>
        </div>
      }
    </div>
  )
}

export default Banner
