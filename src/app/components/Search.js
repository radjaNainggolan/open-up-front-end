import React, { useState, useEffect } from "react";
import ProductsList from "./ProductsList";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";
import { getAllProducts, search } from "app/graphql/queries";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsFilePlus } from "react-icons/bs";
import Tooltip from "@material-ui/core/Tooltip";
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
  const productsPerPage = 15;
  const indexOfLastProduct = currentPage * productsPerPage;
  let currentProducts = products.slice(
    indexOfLastProduct,
    indexOfLastProduct + productsPerPage
  );
  const pages = Math.ceil(products.length / productsPerPage);
  const paginate = ({ selected }) => setCurrentPage(selected);

  return (
    <div className="">
      <div className="flex flex-row items-center justify-center text-white mb-3">
        <input
          type="text"
          value={SEARCH}
          placeholder="search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="my-3 md:w-60 outline-none text-black bg-white pl-2 py-1 rounded-md font-karla"
        />

        <Tooltip title="Pretraga proizvoda po unijetom tesktu">
          <button
            className="find-btn md:block hidden md:bg-none ml-2 mr-1"
            onClick={searchProds}
          >
            <BiSearchAlt2></BiSearchAlt2>
          </button>
        </Tooltip>

        <Tooltip title="Pretraga proizvoda po unijetom tesktu">
          <button
            className="find-btn md:hidden md:bg-none bg-black bg-opacity-10 ml-2 mr-1"
            onClick={searchProds}
          >
            <BiSearchAlt2></BiSearchAlt2>
          </button>
        </Tooltip>

        <Tooltip title="Forma za ubacivanje novog proizovda">
          <Link
            to="/new-product-form"
            className="find-btn md:block hidden md:bg-none "
          >
            <BsFilePlus className="w-4 h-4"></BsFilePlus>
          </Link>
        </Tooltip>

        <Tooltip title="Forma za ubacivanje novog proizvoda">
          <Link
            to="/new-product-form"
            className="find-btn md:hidden md:bg-none bg-black bg-opacity-10"
          >
            <BsFilePlus className="w-4 h-4"></BsFilePlus>
          </Link>
        </Tooltip>
      </div>

      <div className="">
        {loading ? (
          <div className="h-8 my-48 flex justify-center items-center">
            <div className="bg-purple-900 p-5 rounded-full flex space-x-3 duration-500">
              <div className="w-5 h-5 bg-purple-800 rounded-xl animate-bounce delay-100"></div>
              <div className="w-5 h-5 bg-purple-800 rounded-xl animate-bounce delay-400"></div>
              <div className="w-5 h-5 bg-purple-800 rounded-xl animate-bounce delay-600"></div>
            </div>
          </div>
        ) : (
          <ProductsList data={currentProducts} loa={loading} />
        )}
      </div>
      <div className="flex justify-center">
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
          activeClassName="paging bg-purple-900"
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
