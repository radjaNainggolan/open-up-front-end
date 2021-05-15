import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="grid justify-items-center">
      <div className="grid justify-items-center md:flex md:items-center px-10 py-10 w-full space-x-40 bg-amber-200 rounded-xl my-10">
        <img
          src="/images/home_image.jpg"
          alt="error"
          className="w-2/5 rounded-xl"
        />
        <div className="grid justify-items-center">
          <h1 className="text-2xl text-red-600 font-karla">
            Do you know what you eat?
          </h1>
          <br />
          <p className="text-lg w-full text-red-600 font-karla">
            Here you can find out all the details about the product you are
            consuming or maybe planning to buy, such as: nutritional value,
            nutriscore, price, and market or supermarket where you can buy it.
          </p>
          <br />
          <h1 className="text-xl text-red-600 font karla">
            You are what you eat!
          </h1>
          <br />
          <Link to="/search" className="underline font-karla">
            Start the journey
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
