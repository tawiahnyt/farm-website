/** @format */

import Hero from "../components/Hero";
import { aboutUsImg, ourGoals } from "../constants";

const AboutUs = () => {
  return (
    <>
      <div className="">
        <Hero className={"md:h-[550px] h-[350px]"} />
        <div className="row md:h-[370px] h-[170px]">
          <div className="md:mt-[-250px] mt-[-120px] text-center justify-center">
            <div className="">
              <h2 className="lg:text-5xl md:text-3xl text-2xl font-serif font-bold">
                About Us
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:flex md:px-[15%] px-[5%]">
        <img
          src={aboutUsImg}
          alt="about us"
          // width={"500px"}
          className="mx-auto"
        />
        <div className="w-full px-10 md:my-auto">
          <div className="justify-center text-center pb-10 pt-4">
            <h2 className="text-4xl font-serif font-semibold pb-2 lg:text-center text-left pt-2">
              About Us
            </h2>
            <p className="text-lg font-thin text-left pt-4">
              XYZ Food Ltd. Is an international company operating in West and
              Central Africa focusing on improving quality of life and
              well-being through improvement in agriculture.
            </p>
            <p className="text-lg font-thin text-left pt-4">
              Provider of high-quality agricultural produce and spices, we are
              dedicated to delivering fresh, organic, and sustainably sourced
              products to meet the growing demands of our customers.
            </p>
          </div>
        </div>
      </div>

      <div className=" md:px-[15%] px-[5%] text-center justify-center pt-[7%]">
        <h2 className="text-3xl font-serif font-semibold py-[5%]">Our Goals</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {ourGoals.map((value) => (
            <div key={value} className="p-8 pb-4 text-center justify-center">
              {/* <h2 className="text-5xl pb-3 text-green-700 flex justify-center">
                <value.icons />
              </h2> */}
              <h3 className="text-xl font-semibold pb-2">{value.title}</h3>
              <p className="text-lg font-thin">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutUs;

