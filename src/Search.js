import React, { useState } from 'react';

import ProductsList from './ProductsList';
import useData from './useData';
import ReactPaginate from 'react-paginate';
import {Link} from 'react-router-dom';
const Search = () => {
    
    const [currentPage , setCurrentPage] = useState(0);
    const productsPerPage = 16;
    const {products , loading} = useData('http://localhost:8000/products/');
    //console.log(products);
    
    

    const indexOfLastProduct = currentPage * productsPerPage;
    
    const currentProducts = products.slice(indexOfLastProduct , indexOfLastProduct + productsPerPage);
    //console.log(currentProducts);
    const pages = Math.ceil(products.length/productsPerPage);

    const paginate = ({selected}) => setCurrentPage(selected);
    
    

    return ( 
        <div className="">
            <div className="search ">
                <div>
                    <input type="text" className="input"/><br/>
                </div>
                <div className="">
                    <button className="find-btn">
                        Find
                    </button>
                </div>
                <br/>
                <div className="mt-3">
                    <Link to="/new-product-form" className="find-btn py-1">
                        New product
                    </Link>
                </div>
            </div>

            <div className="">
                {products.length > 0 && <ProductsList data={currentProducts} loa={loading}></ProductsList> }
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
                activeClassName="paging bg-red-500"
                activeLinkClassName="outline-none"
                pageClassName="hidden sm:block paging"

                pageLinkClassName="outline-none"
                breakClassName="ml-5"
                >
                </ReactPaginate>
                {/* <Pagination productsPerPage={productsPerPage} paginate={paginate} totalProducts={products.length}></Pagination> */}
            </div>
        </div>
        );
}
 
export default Search;