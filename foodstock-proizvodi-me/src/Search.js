import React, { useState , useEffect } from 'react';
import axios from 'axios';
import ProductsList from './ProductsList';

import ReactPaginate from 'react-paginate';
const Search = () => {
    const [products , setProducts] = useState([]);
    const [loading , setLoading] = useState(false);
    const [currentPage , setCurrentPage] = useState(1);
    const [productsPerPage , setProductsPerPage] = useState(16);

     const fetchProducts = async () => {
        setLoading(true);
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setProducts(res.data);
        setLoading(false);
    }

    

    useEffect( () => {
        fetchProducts();
    }, []);
   
    //console.log(products);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfLastProduct , indexOfLastProduct + productsPerPage);
    const pages = Math.ceil(products.length/productsPerPage);
    const paginate = ({selected}) => setCurrentPage(selected);
    
    

    return ( 
        <div className="">
            <div className="search">
                <div>
                    <input type="text" className="input"/><br/>
                </div>
                <div className="">
                    <button className="find-btn">
                        Find
                    </button>
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
                pageRangeDisplayed={0}
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