/** @format */

import { FaLeaf } from "react-icons/fa";
import { IoShieldHalfSharp } from "react-icons/io5";
import { PiPlantFill } from "react-icons/pi";
import { FaLightbulb } from "react-icons/fa";

import heroImg from "../assets/images/hero-img.jpeg";
import sectionImg from "../assets/images/section-img.jpg";

const ourValues = [
  {
    icons: FaLeaf,
    title: "Quality and Health and Wellness",
    description:
      "Delivering fresh, organic, and high-quality products that meet the highest safety and nutritional standards, encouraging healthy living for individuals and families.",
  },
  {
    icons: IoShieldHalfSharp,
    title: "Integrity and Customer Focus",
    description:
      "Conducting business with honesty, transparency, and ethical practices, while putting customers at the center of every decision to ensure their needs are met with excellent service and reliable products.",
  },
  {
    icons: PiPlantFill,
    title: "Sustainability and Respect for Nature",
    description:
      "Commitment to eco-friendly farming practices that protect the environment, conserve resources, and preserve biodiversity while promoting long-term agricultural health.",
  },
  {
    icons: FaLightbulb,
    title: "Innovation",
    description:
      "Continuously seeking new methods and technologies to improve agricultural production, reduce waste, and meet changing consumer needs.",
  },
];

export { heroImg, sectionImg, ourValues };
