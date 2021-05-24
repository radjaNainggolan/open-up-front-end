import React from "react";
import { Link } from "react-router-dom";

const SingleProduct = ({ key, data, loa, product }) => {
  return (
    <Link key={key} to={`/product/${product.id}`}>
      <div className="bg-white flex flex-col items-center justify-center w-64 rounded-lg mb-5 mx-10 md:mx-10 md:my-5">
        <div className="rounded-t-2xl w-64 max-h-72 min-h-72 flex items-center justify-center">
          <img
            className="min-w-64 max-w-64 max-h-64 rounded-t-lg bg-white"
            src={product.images ? product.images[0] : null}
            alt="error"
          />
        </div>
        <div className="bg-purple-900 bg-opacity-90  w-full rounded-b-lg text-white mt-2 flex justify-center items-center flex-col">
          <p className="font-semibold w-4/5 text-center mt-2">{product.name}</p>
          <p className="text-gray-400 text-sm my-2 w-10/12 text-center">
            {product.briefDescription}
          </p>
          <div className="flex mb-4 flex-row justify-center items-center">
            <p className="py-2 px-3 text-xs rounded-l-lg font-mono bg-black bg-opacity-10 hover:bg-opacity-15">
              {product.category}
            </p>
            <p className="py-2 px-3 text-xs rounded-r-lg bg-black bg-opacity-10 hover:bg-opacity-15">
              {product.nutriScore}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleProduct;
