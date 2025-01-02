/** @format */

import PropTypes from "prop-types";

const ProductCard = ({ image, name }) => {
  return (
    <div className="group block cursor-pointer">
      <img
        src={image}
        alt=""
        className="aspect-square w-full rounded object-cover transition duration-500 hover:scale-105"
      />

      <div className="mt-3">
        <h3 className="text-lg font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
          {name}
        </h3>

        {/* <p className="mt-1 text-sm text-gray-700">$150</p> */}
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ProductCard;
