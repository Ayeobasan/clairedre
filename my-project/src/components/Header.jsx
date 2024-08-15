import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="relative h-[80vh]">
      <div className="absolute inset-0 bg-black opacity-20 md:bg-opacity-20 z-10"></div>
      <div
        className="absolute inset-0  md:block sm:bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://primalpastures.com/cdn/shop/files/meats2.jpg?v=1692822570&width=1200')",
        }}
      >
        <img
          src="//primalpastures.com/cdn/shop/files/PrimalPasturesJune2023-124.jpg?v=1687818405&amp;width=1000"
          alt=""
          width="1000"
          height="1500"
          loading="eager"
          sizes="100vw"
          className="block md:hidden banner__image"
        ></img>
      </div>
      {/* Fixed Navigation Bar with Conditional Background */}
      <Navbar />

      <div className="w-full banner__box absolute bg-[rgb(245,245,245)] z-20 bottom-0 element--border-top-right-arch animate animate--step-in animate--loaded content-box--text-align-left">
        <div className="flex flex-col gap-4">
          <h2 className="text-[2.56rem] leading-tight font-serif font-normal">
            The Only Source
          </h2>
          <div style={{ "--i": 2 }} className=" type--accent copy--medium ">
            FOR 100% ORGANIC + PASTURE RAISED + CORN FREE + SOY FREE MEATS
          </div>
          <div className="text-[1.25rem] font-normal max-w-[45rem]">
            Delivered to your doorstep nationwide
          </div>
          <div className="content-box__buttons" style={{'--i': 4}}>
            {/* <a
              href="/products/primalbox"
              className="button"
              data-samitapbl-handle="primalbox"
            >
              Choose Your Plan
            </a> */}
            <a
              href="/our-products"
              className="button button--secondary"
            >
              Shop All
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
    </header>
  );
};

export default Header;
