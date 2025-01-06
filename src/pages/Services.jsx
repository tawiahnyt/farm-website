/** @format */

import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import { serviceItems } from "../constants";

const Services = () => {
  return (
    <main>
      <Hero
        title={"Our Services"}
        subtitle={
          <>
            <a href="/" className="font-semibold hover:text-white">
              Home
            </a>{" "}
            {`<`} Our Services
          </>
        }
      />
      {/* <div className="">
        
        <div className="absolute items-center justify-center px-4 pt-20 pb-16 mx-auto my-auto text-center sm:top-40 top-24 max-w-7xl sm:px-6 lg:px-8 lg:pt-32 inset-10">
          <h1 className="mt-4 font-serif text-5xl tracking-tight text-balance sm:text-6xl">
            Services
          </h1>
          <p className="mt-6 text-lg text-pretty text-gray-500 sm:text-xl/8">
            <a href="/">Home</a> / Services
          </p>
        </div>
      </div> */}

      <div className="my-20 px-6 lg:px-10 3xl:px-0 mx-auto max-w-[1440px] text-center justify-center0">
        <h2 className="pb-4 font-semibold font-mono text-4xl">Our Services</h2>
        <p className="mt-4 text-lg sm:text-xl/8 text-gray-500">
          At XYZ Food Ltd, we pride ourselves on being your premier source of
          top-quality spices and vegetables. Our products are meticulously
          produced and crafted to bring the authentic state of African cuisine
          to your kitchen. Elevate your meals with the vibrant and unique
          flavors that only XYZ Food can offer. Experience the difference that
          quality makes. Your culinary journey to Africa begins here!!!
        </p>
        <p className="mt-4 text-lg sm:text-xl/8 text-gray-500">
          XYZ limited exports processed products within African countries,
          Europe and Americas, such as Plantain fufu, plantain chips from
          Plantains, Cassava flour, Attieke fresh and dehydrated, Gari, Placali
          from Cassava Passion fruit juice, passion fruit concentrate from
          Passion fruit
        </p>
        <p className="mt-4 text-lg sm:text-xl/8 text-gray-500 italic font-bold">
          Taste the tradition, Trust the Quality Choose XYZ Food
        </p>
      </div>

      <div className="px-6 lg:px-10 3xl:px-0 mx-auto max-w-[1440px] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2">
        {serviceItems.map((item) => (
          <ServiceCard
            key={item}
            image={item.img}
            heading={item.title}
            text={item.description}
          />
        ))}
      </div>
    </main>
  );
};

export default Services;
