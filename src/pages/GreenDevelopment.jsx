/** @format */

import Footer from "../components/Footer";
import GreenHero from "../components/GreenHero";
import { ourGoals } from "../constants";

const GreenDevelopment = () => {
  return (
    <>
      <GreenHero />

      <div className="my-20 px-6 lg:px-10 3xl:px-0 mx-auto max-w-[1440px] text-center justify-center">
        <div>
          <div className="max-w-lg md:max-w-none">
            <h2 className="text-2xl font-mono font-semibold sm:text-4xl">
              Community Focus
            </h2>

            <p className="mt-6 text-lg font-medium text-gray-500 sm:text-xl/8">
              At XYZ Ltd., we believe in the transformative power of education
              and community empowerment. Our focus is on supporting and
              uplifting the most vulnerable groups, particularly women in rural
              areas, who are often the backbone of agricultural communities but
              lack the necessary resources and opportunities.
              We provide training in sustainable farming techniques, business
              development, and financial literacy, ensuring that the community
              can thrive independently.
            </p>
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
              <p className="mt-6 text-gray-500 font-medium sm:text-xl/8">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default GreenDevelopment;
