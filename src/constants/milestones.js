import studentsIcon from "../assets/images/home/icons/students.svg";
import courseIcon from "../assets/images/home/icons/course.svg";
import certificatesIcon from "../assets/images/home/icons/certificates.svg";
import affiliationIcon from "../assets/images/home/icons/affiliation.svg";

const MILESTONES = [
  { img: studentsIcon, count: 7000, label: "Students", showPlus: true, duration: 2.5 },
  { img: courseIcon, count: 50, label: "Courses", showPlus: true, duration: 1 },
  { img: certificatesIcon, count: 3000, label: "Certificates Issued", showPlus: true, duration: 2.5 },
  { img: affiliationIcon, count: 8, label: "Affiliations", showPlus: false, duration: 1 },
];

export default MILESTONES;
