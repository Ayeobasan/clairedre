import React from "react";
import Header from "./Header";
import FAQitem from "./FAQItem";
import Table from "./Table";
import Article from "./Article";

const Home = () => {
  return (
    <>
      <div>
        <Header />

        {/* <section className="bg-white md:bg-transparent md:z-30 relative md:absolute w-full md:mt-[-150px] py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xxs:w-[90%] xs:w-[70%] m-auto md:w-full">
              <div className="bg-[#4caf50] text-white p-6 rounded-[8px]">
                <h3 className="text-[24px] font-semibold">Harvest</h3>
                <p className="mt-2">
                  Welcome to Clairedre Farms, where the harvest is bountiful and
                  fresh.
                </p>
                <button className="mt-6 px-6 py-3 bg-[white] text-[#000000] font-semibold rounded-[4px]">
                  <a href="/our-products">See more...</a>
                </button>
              </div>
              <div className="bg-[#ffffff] text-[#000000] p-6 rounded-[8px] shadow-md">
                <h3 className="text-[24px] font-semibold">Farming</h3>
                <p className="mt-2">
                  At Clairedre Farms, we provide innovative and sustainable
                  farming solutions.
                </p>
                <button className="mt-6 px-6 py-3 bg-[#4caf50] text-[white] font-semibold rounded-[4px]">
                  <a href="/our-products">See more...</a>
                </button>
              </div>
              <div className="bg-[#4caf50] text-white p-6 rounded-[8px]">
                <h3 className="text-[24px] font-semibold">Agriculture</h3>
                <p className="mt-2">
                  Explore our top-quality agricultural products, straight from
                  our farm to your table.
                </p>
                <button className="mt-6 px-6 py-3 bg-[white] text-[#000000] font-semibold rounded-[4px]">
                  <a href="/our-products">See more...</a>
                </button>
              </div>
            </div>
          </div>
        </section> */}

        <section className="bg-[rgb(245,245,245)]  py-12 px-2 xd:px-8">
          <div className="max-w-7xl sm:flex space-y-8 sm:space-y-0 items-start m-auto w-[90%]">
            {/* Introducing Clairedre Farms and the Farmers Behind It */}
            <div className="sm:w-[60%]">
              <h2 className="text-3xl xs:text-[50px] text-[#4caf50] font-bold">
                Meet Your Farmer
              </h2>
              <a href="/about-us">
                <button className="mt-6 px-6 py-3 bg-[#4caf50] text-[white] font-semibold rounded-[4px]">
                  Learn More
                </button>
              </a>
            </div>
            <div className="sm:w-[70%] space-y-5">
              <p className="xs:text-lg text-black font-bold">
                FARM FRESH GOODNESS
              </p>
              <p className="mt-4 text-black  text-[18px]">
                Welcome to Clairedre Farms, your source for pasture-raised
                poultry and farm-fresh eggs.
              </p>
              <p className="text-black ">
                Located in the heart of Calgary, Alberta, Clairedre Farms is
                dedicated to providing the highest quality pasture-raised
                poultry and eggs. Our commitment to ethical farming practices
                ensures that our chickens roam freely on lush pastures,
                resulting in nutritious and delicious products.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="bg-[#f5f5f5] text-black py-12">
          <div className="max-w-7xl mx-auto px-4">
            {/* Showcasing Clairedre Farms' Experience and Offerings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xs:w-[90%] m-auto md:w-full">
              <div className="relative">
                <img
                  src="https://primalpastures.com/cdn/shop/files/PrimalPasturesJune2023-133_1.jpg?v=1688620985&width=550"
                  alt="Experience"
                  className="w-full h-[600px] object-cover"
                />
              </div>
              <div className="flex flex-col  justify-center py-8 px-4 md:px-16 space-y-4">
                <h2 className="text-3xl font-bold">
                  The Cleanest Meat in Canada
                </h2>
                <p className="text-lg italic">"You are what you eat eats."</p>
                <p className="text-lg">
                  We've set the gold standard for nutrient density since
                  starting with 50 birds in our SoCal backyard in 2012, and we
                  have never compromised on our values.
                </p>
                <div className="text-md  font-medium">
                  SEE HOW OUR CHICKEN STACKS UP BELOW
                </div>
              </div>
              {/* <div className="bg-[#ffffff] p-6 rounded-[8px] shadow-md">
                <h3 className="text-[24px] font-semibold">What We Offer</h3>
                <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <div className="bg-[#4caf50] text-white p-4 rounded-[50%]">
                      <i className="fas fa-leaf"></i>
                    </div>
                    <div className="ml-4 text-black">
                      <h4 className="text-[18px] text-black font-semibold">
                        Fresh Vegetables
                      </h4>
                      <p className="text-[16px] text-black">
                        We offer a wide range of fresh vegetables.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-[#4caf50] text-white p-4 rounded-[50%]">
                      <i className="fas fa-apple-alt"></i>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-[18px] text-black font-semibold">
                        Dairy Products
                      </h4>
                      <p className="text-[16px] text-black">
                        We provide fresh dairy products.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-[#4caf50] text-white p-4 rounded-[50%]">
                      <i className="fas fa-seedling"></i>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-[18px] text-blackfont-semibold">
                        Organic Products
                      </h4>
                      <p className="text-[16px] text-black">
                        We offer a variety of organic products.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-[#4caf50] text-white p-4 rounded-[50%]">
                      <i className="fas fa-tractor"></i>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-[18px] text-black font-semibold">
                        Harvest Innovation
                      </h4>
                      <p className="text-[16px]">
                        We provide innovative solutions for your harvest.
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        <Table />
        {/* <section className="bg-[#4caf50] py-12 text-center text-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-[36px] font-bold">
              We Provide Only Quality Products
            </h2>
            <a href="/about-us">
              <button className="mt-6 px-6 py-3 bg-[white] text-[#4caf50] font-semibold rounded-[4px]">
                Learn More
              </button>
            </a>
          </div>
        </section> */}
        <div className="bg-[rgb(49,49,48)] text-[rgb(228,228,225)] text-center py-16">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className=" text-3xl md:text-6xl font-bold mb-12">
              The Primal Standard: Chicken Feed
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className=" p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Primal Pastures</h3>
                <ul className=" list-inside text-center space-y-2">
                  <li>Organic Milo and Barley</li>
                  <li>Organic Peas</li>
                  <li>Organic Fish Meal</li>
                  <li>Organic Olive Oil</li>
                  <li>Insects, Bugs, and Worms</li>
                  <li>Grasses like rye, fescue, bluestem and wild rye</li>
                  <li>Forbs like red and white clover</li>
                  <li>Wildflowers like aster, bergamot, and geranium</li>
                </ul>
              </div>
              <div className=" p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">
                  Everyone Else (99.999%)
                </h3>
                <ul className=" list-inside text-center space-y-2">
                  <li>Corn</li>
                  <li>Soybeans</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-[#ffffff] py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-[36px] font-bold text-center">
              Explore Projects
            </h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5  xs:w-[80%] sm:w-[70%] m-auto md:w-full">
              <div className="relative">
                <img
                  src="https://bpb-us-w2.wpmucdn.com/blog.smu.edu/dist/e/97/files/2013/06/eggs-1100x600.jpg"
                  alt="Project 1"
                  className="w-full h-[400px] object-cover rounded-[8px]"
                />
                <div className="  inset-0  text-center text-white">
                  <div className="bg-[#000000] absolute w-full   bottom-0 bg-opacity-50 p-4 rounded-[8px]">
                    <h3 className="text-[24px] font-bold">Eggs</h3>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://fthmb.tqn.com/AjA0X0jkEdkM2z2pY9fgfhlWbNg=/1280x853/filters:fill(auto,1)/goats-resized-57bb57ee3df78c8763fba0c8.jpg"
                  alt="Project 2"
                  className="w-full h-[400px] object-cover rounded-[8px]"
                />
                <div className="absolute inset-0 text-center text-white">
                  <div className="bg-[#000000] absolute w-full   bottom-0 bg-opacity-50 p-4 rounded-[8px]">
                    <h3 className="text-[24px] font-bold">Goat</h3>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://www.deheus.co.za/contentassets/0da577736193484db91bf4330948a1e1/720x405-100702-102_bijsterveldt_22470-5bd06cd077bd2.png"
                  alt="Project 3"
                  className="w-full h-[400px] object-cover rounded-[8px]"
                />
                <div className="absolute inset-0 text-center text-white">
                  <div className="bg-[#000000] absolute w-full   bottom-0 bg-opacity-50 p-4 rounded-[8px]">
                    <h3 className="text-[24px] font-bold">Fowl</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f5f5] py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xs:w-[90%] sm:w-[80%] m-auto md:w-full">
              <div className="bg-white">
                <FAQitem />
              </div>
              <div className="relative">
                <img
                  src="https://thumbs.dreamstime.com/b/white-sheep-blue-paint-marks-white-sheep-blue-painted-marks-field-99537198.jpg"
                  alt="Photo Gallery"
                  className="w-full h-[400px] object-cover rounded-[8px]"
                />
                <div className=" absolute bottom-14 right-0 text-xl text-[#4caf50] p-4 rounded-[8px] bg-white">
                  {" "}
                  Sheep Coming Soon
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="bg-[#ffffff] text-black py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-[36px] text-black font-bold text-center">
              What They're Saying
            </h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 xs:w-[90%] sm:w-[80%] m-auto md:w-full">
              <div className="bg-[#ffffff] text-black p-6 rounded-[8px] shadow-md">
                <p className="text-[16px]">
                  "The eggs from Clairedre Farms are the best I've ever tasted.
                  Fresh, delicious, and full of flavor!"
                </p>
                <div className="mt-4 flex items-center">
                  <img
                    src="https://th.bing.com/th/id/OIP.Sx10NhY9glfDacYAhbXMkQHaJQ?rs=1&pid=ImgDetMain"
                    alt="Testimonial 1"
                    className="w-[50px] h-[50px] object-cover rounded-[50%]"
                  />
                  <div className="ml-4">
                    <h4 className="text-[18px] font-semibold">Christine Eve</h4>
                    <p className="text-[16px]">Customer</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#ffffff] text-black p-6 rounded-[8px] shadow-md">
                <p className="text-[16px]">
                  "I appreciate the ethical farming practices at Clairedre
                  Farms. Their commitment to quality is unmatched."
                </p>
                <div className="mt-4 flex items-center">
                  <img
                    src="https://th.bing.com/th/id/OIP.MK-P_UfM03EaOrOMe_J4zgAAAA?w=440&h=577&rs=1&pid=ImgDetMain"
                    alt="Testimonial 2"
                    className="w-[50px] h-[50px] object-cover rounded-[50%]"
                  />
                  <div className="ml-4">
                    <h4 className="text-[18px] font-semibold">Mike Hardson</h4>
                    <p className="text-[16px]">Customer</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#ffffff] text-black p-6 rounded-[8px] shadow-md">
                <p className="text-[16px]">
                  "The vegetables are always fresh, and I love knowing where my
                  food comes from."
                </p>
                <div className="mt-4 flex items-center">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/5cd08400fcbdb10001a870b5/1574275179764-31TX0UG9ULXPYRDLUCF1/Teen+girl+smiling.jpg"
                    alt="Testimonial 3"
                    className="w-[50px] h-[50px] object-cover rounded-[50%]"
                  />
                  <div className="ml-4">
                    <h4 className="text-[18px] font-semibold">Sarah Rose</h4>
                    <p className="text-[16px]">Customer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className="bg-[#ffffff] text-black py-12">
          <div className="max-w-7xl mx-auto px-4">
            
            <h2 className="text-[36px] font-bold text-center">
              What's Going On
            </h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#ffffff] text-black p-6 rounded-[8px] shadow-md">
                <h3 className="text-[24px] font-semibold">
                  New Product Launch
                </h3>
                <p className="mt-2">
                  We are excited to announce the launch of our new line of
                  organic produce.
                </p>
              </div>
              <div className="bg-[#ffffff] text-black p-6 rounded-[8px] shadow-md">
                <h3 className="text-[24px] font-semibold">
                  Farmers' Market Event
                </h3>
                <p className="mt-2">
                  Join us at the local farmers' market this weekend for fresh
                  produce and more.
                </p>
              </div>
              <div className="bg-[#ffffff] text-black p-6 rounded-[8px] shadow-md">
                <h3 className="text-[24px] font-semibold">Seasonal Update</h3>
                <p className="mt-2">
                  The summer harvest is in full swing, and we're bringing the
                  best of the season to you.
                </p>
              </div>
            </div>
          </div>
        </section> */}
        {/* <Article /> */}

        {/* <div className="bg-[#000000]">
          <div className="bg-[#00A651] py-8 ">
            <div className="text-center text-white">
              <p className="text-[#D4E157] text-lg">Our Partners</p>
              <h1 className="text-4xl font-bold">Our Clients</h1>
            </div>
          </div>
          <div className="bg-[#FFEB3B] py-8">
            <div className="flex justify-center text-lg md:text-2xl space-x-1 sm:space-x-8">
              <span className="text-[#C0CA33] ">Partner1</span>
              <span className="text-[#C0CA33] ">Partner2</span>
              <span className="text-[#C0CA33] ">Partner3</span>
              <span className="text-[#C0CA33] ">Partner4</span>
            </div>
          </div>
          

          <Footer/>
        </div> */}
      </div>
    </>
  );
};

export default Home;
