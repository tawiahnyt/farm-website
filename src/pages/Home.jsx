/** @format */

import { heroImg } from "../constants";

const Home = () => {
  return (
    <main>
      <div className="w-full bg-center bg-cover">
        <img src={heroImg} alt="Hero img" className="h-screen object-cover w-full " />
      </div>
      <div className="py-4 text-center justify-center">
        <h1>Testing the text</h1>
      </div>
    </main>
  );
};

export default Home;
