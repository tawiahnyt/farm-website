/** @format */

import Hero from "../components/Hero";
import { ourValues, sectionImg } from "../constants";

const Home = () => {
  return (
    <main>
      <div className="">
        <Hero className={"h-[100vh]"} />
        <div className="row h-[650px]">
          <div className="md:mt-[-580px] mt-[-500px] text-center justify-center">
            <div className="lg:px-[25%] md:px-10">
              <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold">
                XYZ FOODS LIMITED
              </h2>
              <p className="p-4 md:text-xl text-md">
                XYZ Food Ltd. Is an international company operating in West and
                Central Africa focusing on improving quality of life and
                well-being through improvement in agriculture.
              </p>
              <a href="#values">
                <button className="border border-green-600 p-3 px-5 mt-2 rounded-full hover:text-white hover:bg-green-600 ">
                  Explore More
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="values" className="flex md:px-[10%] my-[100px]">
        <img
          src={sectionImg}
          alt="section"
          width={"550px"}
          className="hidden xl:block rounded-lg"
        />
        <div className="w-full px-5">
          <div className="justify-center text-center pb-10 pt-4">
            <h2 className="text-4xl font-semibold pb-2">
              Why Choose XYZ Foods Ltd?
            </h2>
            <h3 className="text-3xl font-semibold pt-4">Our Values</h3>
          </div>

          <div className="grid md:grid-cols-2 sm:grid-cols-12">
            {ourValues.map((value) => (
              <div key={value} className="p-8 pb-4 text-center justify-center">
                <h2 className="text-5xl pb-3 text-green-600 flex justify-center">
                  <value.icons />
                </h2>
                <h3 className="text-2xl font-semibold pb-2">{value.title}</h3>
                <p className="text-xl">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
