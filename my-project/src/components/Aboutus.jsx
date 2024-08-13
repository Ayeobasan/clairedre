// import React from 'react';

// const Aboutus = () => {
//   return (
// <div className="flex flex-col items-center p-6 md:p-12 lg:p-20 bg-gray-100">
//   <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">About</h1>
//   <h2 className="text-3xl font-semibold mb-4 text-center text-gray-700">clairedre</h2>

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
          className="absolute inset-0 bg-center bg-cover z-0"
          style={{
            backgroundImage:
              "url('https://www.vscthailand.com/wp-content/uploads/2018/09/%E0%B9%80%E0%B8%A7%E0%B9%87%E0%B8%9A-%E0%B8%AA%E0%B8%B1%E0%B8%95%E0%B8%A7%E0%B9%8C%E0%B8%9B%E0%B8%B5%E0%B8%81-1024x523.png')",
          }}
        ></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20">
        <h1 className="text-4xl font-bold mb-6 text-center ">
          AboutUs
        </h1>
        <h2 className="text-3xl font-semibold mb-4 text-center ">
        Welcome to clairedre
        </h2>
          {/* <button className="mt-4 px-6 py-3 bg-[#fdd835] text-[#000000] font-semibold rounded-[4px]">
            Learn More
          </button> */}
        </div>
      </div>
      <div className="flex flex-col items-center  md:py-12 lg:py-20 bg-gray-100">
       

      <div className="">
      <div className="max-w-7xl mx-auto  py-3 px-2 xd:px-8">


        <div className="">
          <div className="lg:grid lg:grid-cols-1 lg:items-center">
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Our Mission
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                Our mission is to maintain a sustainable and eco-friendly farm that not only delivers premium cattle
                products but also contributes positively to the environment and local community.
              </p>

              <div className="mt-10">
                <h4 className="text-lg leading-6 font-medium text-gray-900">
                  Quality and Care
                </h4>
                <p className="mt-2 text-base text-gray-500">
                  We ensure that all our cattle are raised in a natural and healthy environment, providing them with
                  the care and attention they deserve. Our commitment to quality is reflected in the high standard
                  of our products.
                </p>
              </div>

              <div className="mt-10">
                <h4 className="text-lg leading-6 font-medium text-gray-900">
                  Sustainable Practices
                </h4>
                <p className="mt-2 text-base text-gray-500">
                  Sustainability is at the heart of everything we do. We implement environmentally friendly practices
                  to minimize our carbon footprint and ensure the longevity of our farming operations.
                </p>
              </div>
            </div>

            {/* <div className="mt-10 lg:mt-0">
              <img
                className="rounded-lg shadow-lg object-cover object-center h-96 w-full"
                src="https://source.unsplash.com/featured/?cattle,farm"
                alt="Cattle on farm"
              />
            </div> */}
          </div>

          <div className="mt-12 lg:mt-20">
            <div className="lg:grid lg:grid-cols-1 lg:items-center">
              <div className="lg:order-2">
                <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  Meet Our Team
                </h3>
                <p className="mt-3 text-lg text-gray-500">
                  Our team is composed of dedicated professionals who are passionate about farming and animal care.
                  We work together to ensure that clairedre remains a leader in the industry.
                </p>

                <div className="mt-10">
                  <h4 className="text-lg leading-6 font-medium text-gray-900">
                    Expert Farmers
                  </h4>
                  <p className="mt-2 text-base text-gray-500">
                    Our farmers are experts in their field, with years of experience in raising and caring for cattle.
                    Their knowledge and dedication are key to our success.
                  </p>
                </div>

                <div className="mt-10">
                  <h4 className="text-lg leading-6 font-medium text-gray-900">
                    Veterinary Care
                  </h4>
                  <p className="mt-2 text-base text-gray-500">
                    Our veterinarians are highly skilled and provide exceptional care to ensure the health and well-being
                    of our cattle. Regular health check-ups and preventive measures are a top priority.
                  </p>
                </div>
              </div>

              {/* <div className="mt-10 lg:mt-0 lg:order-1">
                <img
                  className="rounded-lg shadow-lg object-cover object-center h-96 w-full"
                  src="https://source.unsplash.com/featured/?team,farm"
                  alt="Team on farm"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Aboutus;
