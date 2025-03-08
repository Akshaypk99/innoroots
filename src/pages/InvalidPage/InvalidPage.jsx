import React, { useEffect } from 'react'
import './InvalidPage.scss'

const InvalidPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className='invalid-page'>
      <div className='not-found'>
        PAGE NOT FOUND
      </div>
    </div>
  )
}

export default InvalidPage
