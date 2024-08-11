// import React from 'react';

// const Aboutus = () => {
//   return (
// <div className="flex flex-col items-center p-6 md:p-12 lg:p-20 bg-gray-100">
//   <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">About</h1>
//   <h2 className="text-3xl font-semibold mb-4 text-center text-gray-700">Doyle Cattle Farm</h2>

//   <section className="mb-12 max-w-4xl text-center">
//     <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Farm</h3>
//     <p className="text-xl text-gray-600 mb-4">Raising Cattle Responsibly Since 1928</p>
//     <p className="text-gray-600">
//       I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
//     </p>
//   </section>

//   <section className="max-w-4xl text-center">
//     <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Story</h3>
//     <p className="text-xl text-gray-600 mb-4">Local Family Farm</p>
//     <p className="text-gray-600">
//       This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
//     </p>
//   </section>
// </div>
//   );
// };

// export default Aboutus;
import React from "react";

const Aboutus = () => {
  return (
    <div>
      <div className="relative  h-[60vh]">
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <div
          className="absolute inset-0 bg-contain bg-center z-0"
          style={{
            backgroundImage:
              "url('https://kitchendivas.com/wp-content/uploads/2016/03/honey-roasted-chicken-recipe-500x375.jpg')",
          }}
        ></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20">
        <h1 className="text-4xl font-bold mb-6 text-center ">
          AboutUs
        </h1>
        <h2 className="text-3xl font-semibold mb-4 text-center ">
          Doyle Cattle Farm
        </h2>
          {/* <button className="mt-4 px-6 py-3 bg-[#fdd835] text-[#000000] font-semibold rounded-[4px]">
            Learn More
          </button> */}
        </div>
      </div>
      <div className="flex flex-col items-center p-6 md:p-12 lg:p-20 bg-gray-100">
       

        <section className="mb-12 max-w-4xl text-center">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Our Farm
          </h3>
          <p className="text-xl text-gray-600 mb-4">
            Raising Cattle Responsibly Since 1928
          </p>
          <p className="text-gray-600">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. Feel free to drag and drop me
            anywhere you like on your page. I’m a great place for you to tell a
            story and let your users know a little more about you.
          </p>
        </section>

        <section className="max-w-4xl text-center">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Our Story
          </h3>
          <p className="text-xl text-gray-600 mb-4">Local Family Farm</p>
          <p className="text-gray-600">
            This is a great space to write a long text about your company and
            your services. You can use this space to go into a little more
            detail about your company. Talk about your team and what services
            you provide. Tell your visitors the story of how you came up with
            the idea for your business and what makes you different from your
            competitors. Make your company stand out and show your visitors who
            you are.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Aboutus;
