import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="relative h-[100vh]">
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://static.wixstatic.com/media/5eed26_07076fb0b00e44e1b78e0f0b9042d4f4~mv2.jpg/v1/fill/w_980,h_832,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5eed26_07076fb0b00e44e1b78e0f0b9042d4f4~mv2.jpg')",
        }}
      ></div>
      {/* Fixed Navigation Bar with Conditional Background */}
      <Navbar />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20">
        <h1 className="text-5xl md:text-[50px] xd:text-[50px] xd:w-[50%] font-bold">
          Experience the Difference with Pasture-Raised Poultry
        </h1>
        <button className="mt-6 px-6 py-3 bg-[#4caf50] text-[white] font-semibold rounded-[4px]">
          <a href="/our-products">Shop with us</a>
        </button>
      </div>
      {/* Mobile Menu */}
    </header>
  );
};

export default Header;
