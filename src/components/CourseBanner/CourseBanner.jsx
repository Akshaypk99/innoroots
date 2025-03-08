import React, { useEffect, useState } from "react";
import "./CourseBanner.scss";
import aiRoboticsBanner from "../../assets/images/courses/ai-robotics-banner.jpg";
import aiMlBanner from "../../assets/images/courses/ai-ml-banner.jpg";
import aiRoboticsBannerMob from "../../assets/images/courses/ai-robotics-banner-mobile.jpg";
import aiMlBannerMob from "../../assets/images/courses/ai-ml-banner-mobile.jpg";

const courseImages = [
  { desktop: aiRoboticsBanner, mobile: aiRoboticsBannerMob },
  { desktop: aiMlBanner, mobile: aiMlBannerMob },
];

const CourseBanner = ({ page }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 678);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 678);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (page === "courses") {
      const interval = setInterval(() => {
        setFade(true); // Start fade-out effect
        setTimeout(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % courseImages.length);
          setFade(false); // Start fade-in effect
        }, 500); // Duration of fade-out
      }, 3000); // Change image every 3 seconds

      return () => clearInterval(interval);
    }
  }, [page]);

  return (
    <div className={`course-banner ${page}`}>
      <div className={`image-slider ${fade ? "fade-out" : "fade-in"}`}>
        <img
          src={isMobile ? courseImages[currentImageIndex].mobile : courseImages[currentImageIndex].desktop}
          alt="Course Banner"
          className="img-fluid"
        />
      </div>
    </div>
  );
};

export default CourseBanner;
