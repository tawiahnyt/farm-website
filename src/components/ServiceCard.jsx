/** @format */

import PropTypes from "prop-types";

const ServiceCard = ({ image, heading, text }) => {
  return (
    <div className="block rounded-lg p-4 shadow-md hover:shadow-2xl cursor-pointer">
      <img alt="" src={image} className="h-64 w-full rounded-md object-cover" />

      <div className="mt-4">
        <h3 className="text-2xl font-medium">{heading}</h3>
        <p className="mt-2 text-md text-pretty text-gray-500">{text}</p>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  image: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ServiceCard;
