import SingleProduct from "app/components/SingleProduct";

const ProductsList = ({ data, loa }) => {
  return (
    <div className="my-20 grid justify-items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-40 gap-y-40 my-16">
        {data.map((product) => (
          <div key={product.id} className="">
            <SingleProduct
              product={product}
              key={product.id}
              data={data}
              loa={loa}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;

// {
//   /* <Link
//   key={product.id}
//   className="grid justify-items-center text-center text-white font-karla text-sm"
//   to={`/product/${product.id}`}
// >
//   <div className="w-40 h-40 rounded-xl">
//     <img
//       className="mt-4 w-40 h-40 rounded-xl mb-5"
//       src={product.images ? product.images[0] : null}
//       alt="error"
//     />
//   </div>
//   <div className="mt-10">
//     <h2 className="overflow-hidden mb-2">
//       <span> Name: {product.name}</span>
//     </h2>

//     <ul>
//       <li className="overflow-hidden mb-2">
//         {" "}
//         Brief description: {product.briefDescription}
//       </li>

//       <li className="overflow-hidden mb-2">
//         Category: {product.category}
//       </li>

//       <li className="overflow-hidden mb-2">
//         <span>Nutri-score: {product.nutriScore}</span>
//       </li>
//     </ul>
//   </div>
// </Link> */
// }
