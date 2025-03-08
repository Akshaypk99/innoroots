import aiMlImage from '../assets/images/courses/ai-robotics.jpg';
import aiRoboticsImage from '../assets/images/courses/ai-ml.jpg';
import aiMlImageDetail from '../assets/images/courses/details/ai-robotics.jpg';
import aiRoboticsImageDetail from '../assets/images/courses/details/ai-ml.jpg';
import aiMlImageBanner from '../assets/images/courses/ai-robotics-banner.jpg';
import aiMlImageBannerMob from '../assets/images/courses/ai-robotics-banner-mobile.jpg';
import aiRoboticsImageBanner from '../assets/images/courses/ai-ml-banner.jpg';
import aiRoboticsImageBannerMob from '../assets/images/courses/ai-ml-banner-mobile.jpg';

const COURSES = [
    {
        id: "robotics-and-ai",
        title: "Diploma in Robotics & Artificial Intelligence",
        image_url: aiMlImage,
        detail_img_url: aiMlImageDetail,
        banner_img: aiMlImageBanner,
        banner_img_mob: aiMlImageBannerMob,
        description: "This immersive program covers the core principles of robotics and artificial intelligence, with a strong emphasis on hands-on learning. Participants will learn to build, program, and control robots while integrating AI for navigation and vision. The course includes modern tools like ROS (Robot Operating System) for scalable robotics solutions.",
        key_benefits: [
            "Design, program, and assemble robots from scratch.",
            "Master robotics control and AI integration for navigation and vision.",
            "Build functional robots, including line-following, robotic arm, obstacle-avoiding, and voice-controlled robots.",
            "Gain experience with ROS to manage complex robotics systems."
        ],
        tech_stacks: [
            "Programming: Python, Arduino IDE, C++",
            "Hardware: Arduino microcontrollers, ESP32, Jetson Nano, Raspberry Pi, sensors (ultrasonic, motion, etc.), actuators, motors",
            "Libraries/Tools: OpenCV, PyTorch, ROS (Robot Operating System)",
            "Platforms: Raspberry Pi, NVIDIA Jetson Nano, Arduino, ESP32",
            "Simulators: Gazebo for testing robotics designs"
        ]
    },
    {
        id: "ml-and-ai",
        title: "Diploma in Machine Learning & Artificial Intelligence",
        image_url: aiRoboticsImage,
        detail_img_url: aiRoboticsImageDetail,
        banner_img: aiRoboticsImageBanner,
        banner_img_mob: aiRoboticsImageBannerMob,
        description: "This immersive program covers the core principles of robotics and artificial intelligence, with a strong emphasis on hands-on learning. Participants will learn to build, program, and control robots while integrating AI for navigation and vision. The course includes modern tools like ROS (Robot Operating System) for scalable robotics solutions.",
        key_benefits: [
            "Design, program, and assemble robots from scratch.",
            "Master robotics control and AI integration for navigation and vision.",
            "Build functional robots, including line-following, robotic arm, obstacle-avoiding, and voice-controlled robots.",
            "Gain experience with ROS to manage complex robotics systems."
        ],
        tech_stacks: [
            "Programming: Python, Arduino IDE, C++",
            "Hardware: Arduino microcontrollers, ESP32, Jetson Nano, Raspberry Pi, sensors (ultrasonic, motion, etc.), actuators, motors",
            "Libraries/Tools: OpenCV, PyTorch, ROS (Robot Operating System)",
            "Platforms: Raspberry Pi, NVIDIA Jetson Nano, Arduino, ESP32",
            "Simulators: Gazebo for testing robotics designs"
        ]
    }
];

export default COURSES;
