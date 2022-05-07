import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo-libra-tech.png";

function Navbar() {
  return (
    <nav className="flex h-16 w-screen">
      <img src={Logo} alt="logo" />
      <div className="flex w-full justify-between items-center bg-blue-10 py-3 px-5 text-white">
        <Link to="/">
          <p className="uppercase text-2xl">libra tech</p>
        </Link>
        <input
          type="text"
          className="h-9 w-[684px] bg-blue-5 placeholder-white px-3"
          placeholder="Search..."
        />
        <ul className="flex gap-6">
          {["Home", "Solution", "Courses", "Jobs"].map((item, index) => (
            <li key={index}>
              <Link to={`/${item.toLocaleLowerCase()}`}>
                <button className="hover:text-slate-200 font-medium">
                  {item}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
