import React from "react";
import { Link } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
const SingleProduct = ({ key, data, loa, product }) => {
  return (
    <Link key={key} to={`/product/${product.id}`}>
      <Tooltip
        title={
          product.briefDescription === ""
            ? "Ovaj proizvod nema kratak opis"
            : product.briefDescription
        }
        placement="top"
        className="h-20"
      >
        <div className="bg-purple-900 bg-opacity-90 flex flex-col items-center justify-center w-80 h-72 rounded-lg">
          <div className="bg-white rounded-t-lg w-80 flex items-center justify-center">
            <img
              className="h-64 w-64 rounded-t-lg bg-white"
              src={product.images ? product.images[0] : null}
              alt="error"
            />
          </div>
          <div className="bg-purple-900 bg-opacity-90  w-full rounded-b-lg text-white mt-2 flex justify-center items-center flex-col">
            <p className="font-semibold w-4/5 text-center mb-2 mt-2">
              <span>{product.name}</span>
            </p>
            {/* <p className="text-gray-400 text-xs my-2 w-10/12 text-center">
            {product.briefDescription === "" ? (
              <div>Ovaj proizvod nema kratak opis.</div>
            ) : (
              product.briefDescription
            )}
          </p> */}
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
      </Tooltip>
    </Link>
  );
};

export default SingleProduct;
