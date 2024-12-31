/** @format */

import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { ourValues, sectionImg } from "../constants";

const Home = () => {
  return (
    <>
      <main>
        <div className="">
          <Hero className={"h-[100vh]"} />

          <div className="absolute lg:top-56 top-40 items-center justify-center mx-auto my-auto max-w-7xl px-4 pb-6 pt-20 text-center sm:px-6 lg:px-8 lg:pt-32 inset-10">
            <h1 className="mt-4 text-balance text-5xl font-serif font-semibold tracking-tight sm:text-6xl">
              XYZ FOODS LIMITED
            </h1>
            <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              XYZ Food Ltd. Is an international company operating in West and
              Central Africa focusing on improving quality of life and
              well-being through improvement in agriculture.
            </p>
            <div className="mt-5 flex justify-center gap-x-6">
              <a href="#values">
                <button className="border border-green-700 text-pretty text-lg font-medium text-gray-500 p-3 px-5 mt-2 rounded-full hover:text-white hover:bg-green-700 sm:text-xl/8">
                  Explore More
                </button>
              </a>
            </div>
          </div>
        </div>

        <div id="values" className="flex md:px-[10%] sm:my-[150px] py-20">
          <img
            src={sectionImg}
            alt="section"
            width={"550px"}
            className="hidden xl:block rounded-lg"
          />
          <div className="w-full px-5 my-auto">
            <div className="justify-center text-center pb-10 pt-4">
              <h2 className="font-mono font-semibold text-4xl">
                Why Choose XYZ Foods Ltd?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 sm:grid-cols-12">
              {ourValues.map((value) => (
                <div
                  key={value}
                  className="p-8 pb-4 text-center justify-center"
                >
                  <h2 className="text-5xl pb-3 text-green-700 flex justify-center">
                    {value.icon()}
                  </h2>
                  <h3 className="font-serif text-2xl font-semibold">
                    {value.title}
                  </h3>
                  <p className="mt-6 text-lg text-pretty text-gray-500 sm:text-xl/8">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
