/** @format */

import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import { ourValues, sectionImg, serviceItems } from "../constants";

const Home = () => {
  return (
    <>
      <main>
        <Hero
          title={"XYZ FOODS LIMITED"}
          subtitle={
            "XYZ Food Ltd. Is an international company operating in West and Central Africa focusing on improving quality of life and  well-being through improvement in agriculture."
          }
          button
        />

        {/* <div className="absolute lg:top-56 top-40 items-center justify-center mx-auto max-w-[1440px] px-4 pb-6 pt-20 text-center sm:px-6 lg:px-48 lg:pt-32 inset-10">
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
                <button className="border border-green-500 p-2 btn-success px-5 mt-2 rounded-full hover:text-white hover:bg-green-700 sm:text-xl/8">
                  Explore More
                </button>
              </a>
            </div>
          </div> */}

        <div className="my-20 px-6 lg:px-10 3xl:px-0 mx-auto max-w-[1440px] text-center justify-center">
          <h1 className="font-mono font-semibold text-3xl p-10">
            Why Choose XYZ Foods Ltd?
          </h1>
          <div id="values" className="flex">
            <img
              src={sectionImg}
              alt="section"
              width={"550px"}
              className="hidden xl:block rounded-lg"
            />
            <div className="w-full px-5 my-auto">
              <div className="pb-10 pt-4">
                <h2 className="font-mono font-semibold text-4xl">Our Values</h2>
              </div>

              <div className="grid md:grid-cols-2 sm:grid-cols-12">
                {ourValues.map((value) => (
                  <div key={value} className="p-8 pb-4">
                    <h2 className="text-5xl pb-3 text-green-700 flex justify-center">
                      {value.icon()}
                    </h2>
                    <h3 className="font-serif text-2xl font-semibold">
                      {value.title}
                    </h3>
                    <p className="mt-6 text-lg text-pretty font-medium text-gray-500 sm:text-xl/8">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="my-20 px-6 lg:px-10 3xl:px-0 mx-auto max-w-[1440px] text-center justify-center">
          <h1 className="font-mono font-semibold text-3xl pt-10">
            Our Products
          </h1>

          <p className="p-4 text-lg font-medium text-gray-500">
            4 Types of products to transform our communities.
          </p>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2">
            {serviceItems.map((item) => (
              <ServiceCard
                key={item}
                image={item.img}
                heading={item.title}
                // text={item.description}
              />
            ))}
          </div>

          <div className="mt-5">
            <a
              className="rounded-full hover:bg-green-600 hover:text-white px-12 py-3 text-sm font-medium text-green-600 border border-green-600 shadow sm:w-auto"
              href="/products-and-services"
            >
              Explore our products
            </a>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
