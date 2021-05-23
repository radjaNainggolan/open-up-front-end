import React from "react";

const ProductPage = () => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <div className="flex flex-col border w-80 p-4 rounded-xl items-center justify-start">
          <div className="flex flex-row">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/51iAZ2nZ4zL._SX425_.jpg"
              alt="proizvod"
              className="max-h-24"
            />
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/51iAZ2nZ4zL._SX425_.jpg"
              alt="proizvod"
              className="max-h-24"
            />
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/51iAZ2nZ4zL._SX425_.jpg"
              alt="proizvod"
              className="max-h-24"
            />
          </div>
          <div className="text-xl font-semibold flex justify-between items-center">
            <p>Coca Cola</p>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </div>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Necessitatibus magnam, eum labore soluta ullam error expedita
            accusantium exercitationem quas corrupti quia, dolor sint saepe
            aspernatur maxime et eos similique? Sequi.
          </p>
          <p className="flex flex-row">
            <p className="font-bold">Place of origin:&nbsp;</p> USA
          </p>
          <p className="flex flex-row">
            <p className="font-bold">Main ingredients:&nbsp;</p> Deez Nuts and
            stuff.
          </p>
          <p className="flex flex-row">
            <p className="font-bold">Place of origin:&nbsp;</p> America
          </p>
          <p className="flex flex-row">
            <p className="font-bold">Place of origin:&nbsp;</p> USA
          </p>
          <p className="flex flex-row">
            <p className="font-bold">Place of origin:&nbsp;</p> USA
          </p>
          <p className="flex flex-row">
            <p className="font-bold">Place of origin:&nbsp;</p> USA
          </p>
          <p className="flex flex-row">
            <p className="font-bold">Place of origin:&nbsp;</p> USA
          </p>
          <p className="flex flex-row">
            <p className="font-bold">Place of origin:&nbsp;</p> USA
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
