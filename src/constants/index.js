/** @format */

import {
  FaLeaf,
  FaUsers,
  FaTractor,
  FaHandshake,
  FaLightbulb,
} from "react-icons/fa";
import { IoShieldHalfSharp } from "react-icons/io5";
import { PiPlantFill } from "react-icons/pi";
import { FaPeopleRoof } from "react-icons/fa6";

import heroImg from "../assets/images/hero-img.webp";
import sectionImg from "../assets/images/section-img.webp";
import aboutUsImg from "../assets/images/about-img.webp";
import fruitImg from "../assets/images/fruit-img.webp"
import vegetableImg from "../assets/images/vegetable-img.webp"
import herbImg from "../assets/images/herbs-and-spice-img.webp"
import seedlingImg from "../assets/images/seedlings-img.webp"

const ourValues = [
  {
    icon: FaLeaf,
    title: "Quality and Health and Wellness",
    description:
      "Delivering fresh, organic, and high-quality products that meet the highest safety and nutritional standards, encouraging healthy living for individuals and families.",
  },
  {
    icon: IoShieldHalfSharp,
    title: "Integrity and Customer Focus",
    description:
      "Conducting business with honesty, transparency, and ethical practices, while putting customers at the center of every decision to ensure their needs are met with excellent service and reliable products.",
  },
  {
    icon: PiPlantFill,
    title: "Sustainability and Respect for Nature",
    description:
      "Commitment to eco-friendly farming practices that protect the environment, conserve resources, and preserve biodiversity while promoting long-term agricultural health.",
  },
  {
    icon: FaLightbulb,
    title: "Innovation",
    description:
      "Continuously seeking new methods and technologies to improve agricultural production, reduce waste, and meet changing consumer needs.",
  },
];

const ourGoals = [
  {
    icon: FaPeopleRoof,
    title: "Provide Affordable and Quality Food for Communities",
    description:
      "Ensure local access to nutritious, safe, and affordable food by supporting sustainable food production.",
  },
  {
    icon: FaUsers,
    title: "Create Jobs",
    description:
      "Generate employment opportunities in agriculture, food production, and related sectors to boost local economies.",
  },
  {
    icon: FaTractor,
    title: "Improve Agricultural Practices",
    description:
      "Promote sustainable, efficient farming techniques to increase productivity while protecting the environment.",
  },
  {
    icon: FaHandshake,
    title: "Empower Individuals to Be Independent",
    description:
      "Provide training and resources to help individuals gain self-sufficiency and improve their livelihoods.",
  },
  {
    icon: IoShieldHalfSharp,
    title: "Provide Food Security",
    description:
      "Ensure consistent access to enough food for everyone, even during shortages or crises.",
  },
  {
    icon: PiPlantFill,
    title: "Promote Respect for the Environment",
    description:
      "Encourage environmentally friendly practices, such as reducing waste and conserving resources.",
  },
];

const serviceItems = [
  {
    img: vegetableImg,
    title: "Fresh Vegetables",
    description:
      "Eating a rainbow of vegetables not only delights the palate but also provides a wealth of antioxidants that promote well-being.",
  },
  {
    img: fruitImg,
    title: "Fresh Fruits",
    description:
      "Whether you're making a refreshing smoothie or a vibrant salad, our fruits are sure to elevate your meals.",
  },
  {
    img: herbImg,
    title: "Herbs and Spice",
    description:
      "Elevate your cooking with fresh herbs like basil and cilantro, which enhance flavor and provide health benefits for delicious, nutritious meals.",
  },
  {
    img: seedlingImg,
    title: "Seedlings",
    description: "Explore our variety of seedlings.",
  },
];

export { heroImg, sectionImg, ourValues, aboutUsImg, ourGoals, serviceItems };
