import { v4 as uuidv4 } from 'uuid';
import auxillaryImg from "/public/JustineLapura/projectImages/auxillary.jpg"
import orderingImg from "/public/JustineLapura/projectImages/ordering.jpg"
import DentalClinicImg from "/public/JustineLapura/projectImages/DentalClinic.jpg"
import notifPageImg from "/public/JustineLapura/projectImages/NotifPage.jpg"
import newsletterImg from "/public/JustineLapura/projectImages/newsletter.jpg"
import adviceGeneratorImg from "/public/JustineLapura/projectImages/adviceGenerator.jpg"

export const projectsData = [
  {
    id: uuidv4(),
    developer: "Justine Lapura",
    projectName: "Auxillary Services System",
    img: auxillaryImg,
    demoUrl: "https://auxilliary.vercel.app/",
    repoUrl: "https://github.com/JustineLapura/Auxilliary-project",
  },
  {
    id: uuidv4(),
    developer: "Justine Lapura",
    projectName: "Dental Clinic System",
    img: DentalClinicImg,
    demoUrl: "https://smilecaredentalclinic.vercel.app/",
    repoUrl: "https://github.com/JustineLapura/Auxilliary-project",
  },
  {
    id: uuidv4(),
    developer: "Justine Lapura",
    projectName: "Food Ordering App",
    img: orderingImg,
    demoUrl: "https://justinelapura.vercel.app/property/demo-1",
    repoUrl: "https://github.com/JustineLapura/Auxilliary-project",
  },
  {
    id: uuidv4(),
    developer: "Jethro Lapura",
    projectName: "Notification Page",
    img: notifPageImg,
    demoUrl: "https://notifications-page-justinelapura.vercel.app/",
    repoUrl: "https://github.com/JustineLapura/notifications-page",
  },
  {
    id: uuidv4(),
    developer: "Jethro Lapura",
    projectName: "Newsletter Signup Page",
    img: newsletterImg,
    demoUrl: "https://news-letter-signup-page-justinelapura.vercel.app/",
    repoUrl: "https://github.com/JustineLapura/news-letter-signup-page",
  },
  {
    id: uuidv4(),
    developer: "Jethro Lapura",
    projectName: "Advice Generator App",
    img: adviceGeneratorImg,
    demoUrl: "https://advise-generator-app-justinelapura.vercel.app/",
    repoUrl: "https://github.com/JustineLapura/advise-generator-app",
  },
];
