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
              <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold">
                XYZ FOODS LIMITED
              </h2>
              <p className="p-4 md:text-xl text-md">
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

      <div className="flex px-[15%]">
        <img
          src={sectionImg}
          alt="section"
          width={"550px"}
          className="hidden lg:block"
        />
        <div className="w-full px-5">
          <div className="justify-center text-center">
            <h2>Why Choose XYZ Foods Ltd?</h2>
            <h3>Our Values</h3>
          </div>

          <div className="grid md:grid-cols-2 sm:grid-cols-12">
            <div className="p-3">
              <h3>Text</h3>
              <p>Paragraph!</p>
            </div>
            <div className="p-3">
              <h3>Text</h3>
              <p>Paragraph!</p>
            </div>
            <div className="p-3">
              <h3>Text</h3>
              <p>Paragraph!</p>
            </div>
            <div className="p-3">
              <h3>Text</h3>
              <p>Paragraph!</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
