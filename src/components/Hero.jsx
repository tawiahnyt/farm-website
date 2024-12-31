/** @format */

import { heroImg } from "../constants";
import PropTypes from 'prop-types';

const Hero = ({ className }) => {
  return (
    <div className="w-full bg-center bg-cover z-0">
      <img
        src={heroImg}
        alt="Hero img"
        className={`${className} object-cover w-full relative z-0`}
      />
    </div>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
