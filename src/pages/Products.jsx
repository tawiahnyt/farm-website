/** @format */

import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import { serviceItems } from "../constants";
import Services from "./Services";

const Products = () => {
  return (
    <>
      <main>
        <Hero title={"Products and Services"} subtitle={""} />

        <div className="my-20 px-6 lg:px-10 3xl:px-0 mx-auto max-w-[1440px] text-center justify-center0">
          <h2 className="pb-4 font-semibold font-mono text-4xl">
            Our Products
          </h2>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 font-medium">
            {serviceItems.map((item) => (
              <ServiceCard
                key={item}
                image={item.img}
                heading={item.title}
                text={item.description}
              />
            ))}
          </div>

          <p className="mt-5 text-lg sm:text-xl/8 text-gray-500 font-medium">
            XYZ Ltd. is focused on achieving sustainable growth while meeting
            the needs of our stakeholders. Our company revolves around producing
            high-quality agricultural products, contributing to community
            development, and promoting sustainable environmental practices. We
            pride ourselves on our ability to provide both local and
            international markets with superior products that support food
            security and economic development.
          </p>
          <p className="mt-4 text-lg sm:text-xl/8 text-gray-500 font-medium">
            We offer a wide range of products grown with care by local farmers,
            aimed at both local and export markets:
          </p>
        </div>

        {/* <div className="my-20 px-6 lg:px-10 3xl:px-0 mx-auto max-w-[1440px] text-center justify-center0">
          <h2 className="pb-4 font-semibold font-mono text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg sm:text-xl/8 text-gray-500 font-medium">
            At XYZ Food Ltd, we pride ourselves on being your premier source of
            top-quality spices and vegetables. Our products are meticulously
            produced and crafted to bring the authentic state of African cuisine
            to your kitchen. Elevate your meals with the vibrant and unique
            flavors that only XYZ Food can offer. Experience the difference that
            quality makes. Your culinary journey to Africa begins here!!!
          </p>
          <p className="mt-4 text-lg sm:text-xl/8 text-gray-500 font-medium">
            XYZ limited exports processed products within African countries,
            Europe and Americas, such as Plantain fufu, plantain chips from
            Plantains, Cassava flour, Attieke fresh and dehydrated, Gari,
            Placali from Cassava Passion fruit juice, passion fruit concentrate
            from Passion fruit
          </p>
          <p className="mt-4 text-lg sm:text-xl/8 text-gray-500 italic font-bold">
            Taste the tradition, Trust the Quality Choose XYZ Food
          </p>
        </div> */}

        <Services />
      </main>

      <Footer />
    </>
  );
};

export default Products;
