import { FiSave } from "react-icons/fi";
import { FaPrescription } from "react-icons/fa";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";


import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";
import logo4 from "./assets/logo4.png";


export const navLinks = [
  {
    id: 1,
    href: "home",
    link: "Home",
  },
  {
    id: 2,
    href: "about",
    link: "About",
  },
  {
    id: 3,
    href: "categories",
    link: "Services",
  },
  {
    id: 4,
    href: "contact",
    link: "Contact",
  },
];

export const categories = [
  {
    id: 1,
    icon: <FiSave/>,
    category: "Save money for healthcare",
  },
  {
    id: 2,
    icon: <FaPrescription />,
    category: "Easy access to prescription",
  },
  {
    id: 3,
    icon: <MdOutlineHealthAndSafety />,
    category: "Healthcare Anywere",
  },
  {
    id: 4,
    icon: <MdOutlineSupportAgent />,
    category: "Immediate support",
  },
];

export const logos = [logo1, logo2, logo3, logo4,];

export const accordions = [
  {
    id: 1,
    title: "What is WatuWote Health community?",
  },
  {
    id: 2,
    title: "What can I benefit from WatuWote Health community?",
  },
  {
    id: 3,
    title: "Can I get advise on WatuWote Health community?",
  },
 
];
