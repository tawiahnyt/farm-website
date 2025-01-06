/** @format */

import PropTypes from "prop-types";

const Hero = ({ title, subtitle, button }) => {
  return (
    // <div className="w-full bg-center bg-cover z-0">
    //   <img
    //     src={heroImg}
    //     alt="Hero img"
    //     className={`${className} object-cover w-full relative z-0`}
    //   />
    // </div>
    <section
      className={`bg-[url('/src/assets/images/hero-img.jpeg')] bg-center bg-cover bg-no-repeat ${
        button ? "" : "h-[60vh]"
      }`}
    >
      <div
        className={`mx-auto my-auto max-w-screen-xl px-4 py-48 lg:flex ${
          button ? "lg:h-screen" : "lg:h-[70vh]"
        } lg:items-center`}
      >
        <div className="mx-auto lg:max-w-5xl text-center">
          <h1 className="ext-balance text-5xl font-extrabold tracking-tight sm:text-6xl">
            {title}
          </h1>

          <p className="mt-4 sm:text-xl/relaxed font-semibold">{subtitle}</p>

          {button && (
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded-full bg-green-600 px-12 py-3 text-sm font-medium text-white shadow sm:w-auto border hover:text-green-600 hover:bg-transparent hover:border-green-600"
                href="/"
              >
                Get Started
              </a>

              <a
                className="block w-full rounded-full hover:bg-green-600 hover:text-white px-12 py-3 text-sm font-medium text-green-600 border border-green-600 shadow sm:w-auto"
                href="/"
              >
                Learn More
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  button: Boolean,
};

export default Hero;
