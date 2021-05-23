import React, { useState, useEffect } from "react";
import ProductsList from "./ProductsList";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";
import { getAllProducts, search } from "app/graphql/queries";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsFilePlus } from "react-icons/bs";
const Search = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [SEARCH, setSearch] = useState("");

  async function fetchProducts() {
    try {
      setLoading(true);
      const productsData = await API.graphql(graphqlOperation(getAllProducts));
      const produ = productsData.data.getAllProducts;
      setProducts(produ);
      setLoading(false);
    } catch (err) {
      alert(err.toString());
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  async function searchProds() {
    try {
      setLoading(true);
      const productsData = await API.graphql(
        graphqlOperation(search, { limit: 100000, query: SEARCH })
      );
      const produ = productsData.data.search.results;
      setProducts(produ);
      setLoading(false);
    } catch (err) {
      alert(JSON.stringify(err, null, 4));
    }
  }

  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 16;
  const indexOfLastProduct = currentPage * productsPerPage;
  let currentProducts = products.slice(
    indexOfLastProduct,
    indexOfLastProduct + productsPerPage
  );
  const pages = Math.ceil(products.length / productsPerPage);
  const paginate = ({ selected }) => setCurrentPage(selected);

  return (
    <div className="">
      <div className="search">
        <input
          type="text"
          value={SEARCH}
          placeholder="search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="input"
        />

        <button className="find-btn" onClick={searchProds}>
          <BiSearchAlt2></BiSearchAlt2>
        </button>

        <Link to="/new-product-form" className="find-btn">
          <BsFilePlus className="w-10 h-10"></BsFilePlus>
        </Link>
      </div>

      <div className="">
        {loading ? (
          <div className="h-8 my-48 flex justify-center items-center">
            <div className="bg-green-100 p-5 rounded-full flex space-x-3 duration-500">
              <div className="w-5 h-5 bg-red-500 rounded-full animate-bounce delay-100"></div>
              <div className="w-5 h-5 bg-red-500 rounded-full animate-bounce delay-300"></div>
              <div className="w-5 h-5 bg-red-500 rounded-full animate-bounce delay-600"></div>
            </div>
          </div>
        ) : (
          <ProductsList data={currentProducts} loa={loading} />
        )}
      </div>
      <div className="flex justify-items-center">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={". . ."}
          pageRangeDisplayed={2}
          pageCount={pages}
          onPageChange={paginate}
          containerClassName="flex flex-wrap mb-16 ml-12 sm:ml-10"
          previousClassName="paging"
          nextClassName="paging "
          nextLinkClassName="outline-none"
          previousLinkClassName="outline-none"
          activeClassName="paging"
          activeLinkClassName="outline-none"
          pageClassName="hidden sm:block paging"
          pageLinkClassName="outline-none"
          breakClassName="ml-5"
        />
        {/* <Pagination productsPerPage={productsPerPage} paginate={paginate} totalProducts={products.length}></Pagination> */}
      </div>
    </div>
  );
};

export default Search;
