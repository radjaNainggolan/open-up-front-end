import React from "react";

const Proizvod = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center">
      {/* slika + naslov */}
      <div className="border rounded-t-lg w-96 py-5 px-4">
        {/* slika */}
        <div className="flex items-center justify-center">
          <img
            src="https://www.coca-colacompany.com/content/dam/journey/au/en/brand-detail/coca-cola/Large%20product%20shot%20-%20Coca-Cola%20Classic.png"
            alt="err"
            className="h-28"
          />
        </div>
        {/* slika */}

        {/* naslov */}
        <div className="font-regular text-2xl flex items-baseline justify-between">
          <p>Ime Proizvoda</p>
          <div className="text-gray-500">
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
          {/* naslov */}
        </div>
        {/* slika + naslov */}
      </div>
      {/* desc main container */}
      <div className="border-b border-l border-r w-96 py-3 px-5">
        {/* brief desc */}
        <p className="text-gray-600 leading-6 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam itaque
          aperiam maxime sit ipsa a perferendis maiores sed repellat, tempore
          aliquid reprehenderit illum voluptates eius laudantium aut. Aut,
          dignissimos adipisci?
        </p>
        {/* brief desc */}
        {/* visible atributi */}
        <div className="text-sm mt-2">
          <div className="flex flex-row mb-3">
            <p className="font-bold mr-2">Place of origin:</p>
            <input value="Italy" />
          </div>
          <div className="flex flex-row mb-3">
            <p className="font-bold mr-2">Main ingredients:</p>
            <input
              className="w-max h-max"
              value="Sugar, palm oil, hazelnuts, cocoa solids, milk powder"
            />
          </div>
          <div className="flex flex-row mb-3">
            <p className="font-bold mr-2">Place of origin:</p>
            <input value="Italy" />
          </div>
          <div className="flex flex-row mb-3">
            <p className="font-bold mr-2">Place of origin:</p>
            <input value="Italy" />
          </div>
          <div className="flex flex-row mb-3">
            <p className="font-bold mr-2">Place of origin:</p>
            <input value="Italy" />
          </div>
          <div className="flex flex-row mb-3">
            <p className="font-bold mr-2">Place of origin:</p>
            <input value="Italy" />
          </div>
        </div>
      </div>
      {/* desc main container */}

      {/* dropdown-1 */}
      <div className="border-b border-l border-r w-96 py-3 px-5">
        <div className="flex flex-row justify-between items-center">
          <p>Nutrition ingredients</p>
          <div className="text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        {/* dropdown koji se otvara */}
        <div className="hidden">aye</div>
        {/* dropdown koji se otvara */}
      </div>
      {/* dropdown-1 */}

      {/* dropdown-2 */}
      <div className="border-b border-l border-r w-96 py-3 px-5">
        <div className="flex flex-row justify-between items-center">
          <p>Invention</p>
          <div className="text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        {/* dropdown koji se otvara */}
        <div className="hidden">aye</div>
        {/* dropdown koji se otvara */}
      </div>
      {/* dropdown-2 */}

      {/* dropdown-3 */}
      <div className="border-b border-l border-r w-96 py-3 px-5">
        <div className="flex flex-row justify-between items-center">
          <p>Shelf life</p>
          <div className="text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        {/* dropdown koji se otvara */}
        <div className="hidden">aye</div>
        {/* dropdown koji se otvara */}
      </div>
      {/* dropdown-3 */}

      {/* dropdown-4 */}
      <div className="border-b border-l border-r rounded-b-lg w-96 py-3 px-5 text-sm">
        {" "}
        neki link ili nesto?{" "}
      </div>
      {/* dropdown-4 */}
    </div>
  );
};

export default Proizvod;
