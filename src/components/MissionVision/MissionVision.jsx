import React from 'react'
import './MissionVision.scss'
import missionIcon from "../../assets/images/icons/mission.svg"
import visionIcon from "../../assets/images/icons/vision.svg"

const MissionVision = () => {
  return (
    <div className='mission-vision'>
      <div className="card">
        <div className="title-section">
          <img src={visionIcon} alt='vision' />
          <div className="main-title">
            Vision
          </div>
        </div>
        <div className="img-container">
          <p>
          Democratize AI by empowering every individual, regardless of background, with accessible education and tools, fostering a global workforce that ethically innovates and solves humanity’s most pressing challenges at their roots.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="title-section">
          <img src={missionIcon} className='mission' alt='mission' />
          <div className="main-title">
            Mission
          </div>
        </div>
        <div className="img-container">
          <p>
          Deliver affordable, industry-aligned training<br className="d-none d-xxl-block"/> programs to foster innovation and employability
          </p>
        </div>
      </div>
    </div>
  )
}

export default MissionVision
