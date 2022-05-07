import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo-libra-tech.png";

function Footer() {
  return (
    <div className="flex h-64 justify-between items-center bg-blue-10 px-20 text-white">
      <div className="flex items-center gap-4">
        <img src={Logo} alt="logo" className="object-contain h-16" />
        <p className="uppercase text-2xl">libra tech</p>
      </div>
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
      <p className="text-sm">© LIBRA TECH, Inc. 2020. We love our users!</p>
    </div>
  );
}

export default Footer;
