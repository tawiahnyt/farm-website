/** @format */

import { Link } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import DropDownMenu from "./DropDownMenu";

const NavBar = () => {
  return (
    <header className="sm:px-16 px-8 py-6 z-10 w-full bg-white shadow-md fixed">
      <nav className="flex justify-between items-center">
        <Link to="/">
          <h1>Logo</h1>
        </Link>
        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden font-semibold uppercase">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
        <div className="max-lg:ml-auto max-lg:px-5">
          {/* <button>Contact Us</button> */}
          <DropDownMenu />
        </div>
        <div className="hidden max-lg:block">
          <CgMenu className="w-8 h-8" />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
