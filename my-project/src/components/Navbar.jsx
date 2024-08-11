import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BiShoppingBag } from "react-icons/bi";
import Card from "./Navbar/Card";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cardOpen, setCardOpen] = useState(false);

  const openCard = () => {
    setCardOpen((prev) => !prev);
  };
  // const user = true;
  // const [profileOpen, setProfileOpen] = useState(false);

  const quantity = useSelector((state) => state.cart.totalQuantity);
  useEffect(() => {
    localStorage.setItem("Quantity", JSON.stringify(quantity));
  }, [quantity]);

  // const close = () => {
  //   setProfileOpen(null);
  // };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {cardOpen ? (
        <Card
          openCard={openCard}
          // total={total}
        />
      ) : (
        ""
      )}
      <div
        className={`fixed top-0 left-0 w-full z-50 py-3 px-2 xd:px-8 transition-colors duration-300 ${
          isScrolled
            ? "bg-white text-black drop-shadow-xl"
            : "bg-transparent text-white"
        }`}
      >
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <div>
              <h1 className=" text-2xl font-bold">Logo</h1>
              <p className=" text-sm">Company moto</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className=" text-lg">
              Home
            </a>
            <a href="/about-us" className=" text-lg">
              About
            </a>
            <a href="#services" className=" text-lg">
              Services
            </a>
            <a href="/our-products" className=" text-lg">
              Our Product
            </a>
            <a href="#footer" className=" text-lg">
              Contact
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="/our-product" className="bg-[#45c429]  py-2 px-4 rounded-full flex items-center">
              <span className="mr-2">Shop Now</span>
              <i className="fas fa-arrow-right"></i>
            </a>
            <div
              onClick={openCard}
              className="flex cursor-pointer items-start mr-[20px] "
            >
              <BiShoppingBag size={27} />
              <span>{quantity}</span>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <div
              onClick={openCard}
              className="flex cursor-pointer items-start "
            >
              <BiShoppingBag size={27} />
              <span>{quantity}</span>
            </div>
            <button
              className={`${
                isScrolled ? " text-black drop-shadow-xl" : " text-white"
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 inset-0 z-40 w-full bg-black bg-opacity-90 transform ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col items-center space-y-6 justify-center m-auto h-full py-8">
          <a href="" className="text-[#8cc63f] text-lg">
            Home
          </a>
          <a href="/about-us" className="text-white text-lg">
            About
          </a>
          <a href="#services" className="text-white text-lg">
            Services
          </a>
          <a href="/our-products" className="text-white text-lg">
            Our Produsts
          </a>
          <a href="#footer" className="text-white text-lg">
            Contact
          </a>
          <button className="bg-[#fdd835] text-black py-2 px-4 rounded-full flex items-center">
            <span className="mr-2">Get a Quote</span>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
