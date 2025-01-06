/** @format */

import Hero from "../components/Hero";
import { aboutUsImg, ourGoals } from "../constants";

const AboutUs = () => {
  return (
    <main>
      {/* <div className=""> */}
      <Hero
        title={"About Us"}
        subtitle={
          <>
            <a href="/" className="font-semibold hover:text-white">
              Home
            </a>{" "}
            {`<`} About Us
          </>
        }
      />

      {/* <div className="absolute items-center justify-center px-4 pt-20 pb-16 mx-auto my-auto text-center sm:top-40 top-24 max-w-7xl sm:px-6 lg:px-8 lg:pt-32 inset-10">
          <h1 className="mt-4 font-serif text-5xl tracking-tight text-balance sm:text-6xl">
            About us
          </h1>
          <p className="mt-6 text-lg text-pretty text-gray-500 sm:text-xl/8">
            <a href="/" className="font-semibold hover:text-white">Home</a> / About Us
          </p>
        </div>
      </div> */}

      <div className="my-20 px-6 lg:px-10 3xl:px-0 mx-auto max-w-[1440px] text-center justify-center">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
          <div>
            <img src={aboutUsImg} className="rounded" alt="" />
          </div>
          <div>
            <div className="max-w-lg md:max-w-none">
              <h2 className="text-2xl font-mono font-semibold sm:text-4xl">
                About Us
              </h2>

              <p className="mt-6 text-lg text-left text-gray-500 sm:text-xl/8">
                XYZ Food Ltd. Is an international company operating in West and
                Central Africa focusing on improving quality of life and
                well-being through improvement in agriculture.
              </p>
              <p className="mt-6 text-lg text-left text-gray-500 sm:text-xl/8">
                Provider of high-quality agricultural produce and spices, we are
                dedicated to delivering fresh, organic, and sustainably sourced
                products to meet the growing demands of our customers.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 lg:px-10 3xl:px-0 mx-auto max-w-[1440px] text-center justify-center">
        <h2 className="py-4 font-mono font-semibold text-4xl">Our Goals</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          {ourGoals.map((value) => (
            <div key={value} className="justify-center pb-4 text-center sm:p-8">
              <h2 className="flex justify-center pb-3 text-5xl text-green-700">
                {value.icon()}
              </h2>
              <h3 className="font-serif text-2xl font-semibold">
                {value.title}
              </h3>
              <p className="mt-6 text-gray-500 sm:text-xl/8">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-green-700 p-24 mt-20">
        <div className="px-6 lg:px-10 3xl:px-0 mx-auto max-w-[1440px] text-center justify-center text-white">
          <h2 className="pb-8 font-semibold font-mono text-4xl">Mission</h2>
          <p className="mt-4 text-lg sm:text-xl/8">
            We are dedicated to sustainably growing, harvesting, and delivering
            high-quality organic produce and spices. Our goal is to promote
            health and wellness while supporting eco-friendly farming and
            empowering local farmers.
          </p>
        </div>
      </div>

      <div className="bg-gray-200 p-24 mb-20">
        <div className="px-6 lg:px-10 3xl:px-0 mx-auto max-w-[1440px] text-center justify-center text-text-gray-500">
          <h2 className="pb-8 font-semibold font-mono text-4xl">Vision</h2>
        <p className="mt-4 text-lg sm:text-xl/">
          Our vision is to be a global leader in organic agriculture, recognized
          for our commitment to sustainability, innovation, and excellence in
          providing fresh, wholesome products that nourish communities and
          protect the planet.
        </p>
      </div>
      </div>

        
      {/* <Footer /> */}
    </main>
  );
};

export default AboutUs;
