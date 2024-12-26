/** @format */

import Hero from "../components/Hero";
import { sectionImg } from "../constants";

const Home = () => {
  return (
    <main>
      <div className="">
        <Hero className={"h-screen"} />
        <div className="row h-[700px]">
          <div className="mt-[-580px] text-center justify-center">
            <div className="lg:px-[25%] md:px-10">
              <h2 className="lg:text-5xl md:text-3xl text-xl font-bold">
                XYZ FOODS LIMITED
              </h2>
              <p className="p-4 text-xl">
                XYZ Food Ltd. Is an international company operating in West and
                Central Africa focusing on improving quality of life and
                well-being through improvement in agriculture.
              </p>
              <button className="border border-green-500 p-3 px-5 mt-2 rounded-full hover:text-white hover:bg-green-500 ">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="row">
          <div className="lg:col-span-5 sm:col-span-12 hidden lg:block">
            <div>
              <img src={sectionImg} alt="section" width={"550px"} />
            </div>
          </div>
          <div className="lg:col-span-7 sm:col-span-12">
            <h2>Why Choose XYZ Foods Ltd?</h2>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
