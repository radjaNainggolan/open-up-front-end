import { Link } from "react-router-dom";
import React from "react";

const Home = () => {
  return (
    <div
      style={{ background: "#6F5D83" }}
      className="min-h-screen flex flex-col justify-center items-center -mt-10"
    >
      <div className="md:flex hidden min-h-screen flex-col justify-center items-center">
        <img
          className="md:block hidden absolute z-0 min-h-screen min-w-screen opacity-20"
          src="https://images.unsplash.com/photo-1506617420156-8e4536971650?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80"
          alt="grocery store"
        />
        <img
          className="md:hidden absolute z-0 min-h-screen min-w-screen opacity-20"
          src="https://i.imgur.com/LIiDf7m.png"
          alt="grocery store"
        />
        <div className="absolute z-10 flex flex-col items-center justify-center text-center">
          <p className=" mt-10 text-gray-50 text-5xl font-semibold w-9/12">
            Do you know what you eat?
          </p>
          <p className="text-gray-50 text-xl font-semibold w-9/12 mt-16">
            Here you can find out all the details about the product you are
            consuming or planning to buy, such as: nutritional value,
            nutriscore, price, and market or supermarket where you can buy it.
          </p>
          <a
            href="/"
            className="text-gray-50 text-xl font-semibold py-2 px-4 hover:bg-black hover:bg-opacity-10 rounded-md mt-10 hover:text-gray-100"
          >
            Learn More 🏁
          </a>
        </div>
      </div>
      {/* above big */}
      {/* below small */}
      <div className="md:hidden min-h-screen flex flex-col justify-center items-center">
        <img
          className="absolute z-0 min-h-screen min-w-screen opacity-20"
          src="https://images.unsplash.com/photo-1586090643003-b2bfb4fbd833?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          alt="grocery store"
        />
        <div className="absolute z-10 flex flex-col items-center justify-center text-center">
          <p className=" mt-10 text-gray-50 text-3xl font-semibold w-9/12">
            Do you know what you eat?
          </p>
          <p className="text-gray-50 text-lg font-semibold w-11/12 mt-16">
            We'll help you learn about the groceries you buy and where you can
            find them.
          </p>
          <Link
            to="/search"
            href="/"
            className="text-gray-50 text-xl font-semibold py-2 px-4 hover:bg-black hover:bg-opacity-10 rounded-md mt-10 hover:text-gray-100"
          >
            Learn More 🏁
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

// <div className="grid justify-items-center">
//   <div className="grid justify-items-center space-y-5 md:flex md:items-center px-10 py-10 w-full md:space-x-40 bg-amber-200 rounded-xl my-10">
//     <img
//       src="/images/home_image.jpg"
//       alt="error"
//       className="w-2/5 rounded-xl"
//     />
//     <div className="grid justify-items-center">
//       <h1 className="text-2xl text-red-600 font-karla">
//         Do you know what you eat?
//       </h1>
//       <br />
//       <p className="text-lg w-full text-red-600 font-karla">
//         Here you can find out all the details about the product you are
//         consuming or maybe planning to buy, such as: nutritional value,
//         nutriscore, price, and market or supermarket where you can buy it.
//       </p>
//       <br />
//       <h1 className="text-xl text-red-600 font karla">
//         You are what you eat!
//       </h1>
//       <br />
//       <Link to="/search" className="underline font-karla">
//         Start the journey
//       </Link>
//     </div>
//   </div>
// </div>
