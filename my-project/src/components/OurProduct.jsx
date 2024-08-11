import React from "react";
import Product from "../components/Product/Product";

const OurProduct = () => {
  return (
    <div>
      <div className="relative  bg-white h-[60vh]">
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <div
          className="absolute inset-0 bg-contain bg-center z-0"
          style={{
            backgroundImage:
              "url('https://kitchendivas.com/wp-content/uploads/2016/03/honey-roasted-chicken-recipe-500x375.jpg')",
          }}
        ></div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20">
          <h1 className="text-5xl md:text-[50px] xd:text-[50px] xd:w-[50%] font-bold">
         Our Products
          </h1>
          {/* <button className="mt-4 px-6 py-3 bg-[#fdd835] text-[#000000] font-semibold rounded-[4px]">
            Learn More
          </button> */}
        </div>
     
      </div>
         <Product/>
    </div>
  );
};

export default OurProduct;
