import Car from "../../images/svg-1.svg";
import Pig from "../../images/pig.svg";
import Office from "../../images/office.svg";

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Premium Course",
  headline: "Be a problem-solver not being a programmer",
  description:
    "Get access to our courses app that guides you to gain unlimited discount fee without getting charged any fees.",
  buttonLabel: "Get Started",
  imgStart: false,
  img: Car,
  alt: "Car",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: "discover",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Unlimited Access",
  headline: "Login to Your Account Now",
  description:
    "We have you covered whenever you are located. All you need is an internet connection and a phone or a computer",
  buttonLabel: "Learn More",
  imgStart: true,
  img: Pig,
  alt: "pig",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: "signup",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Join Our Team",
  headline: "Creating an Account is super easy",
  description:
    "Get everything set up and ready in short minutes. All you need to do is add your information and you're ready to go",
  buttonLabel: "Sign Up Now",
  imgStart: false,
  img: Office,
  alt: "office",
  dark: false,
  primary: false,
  darkText: true,
};
