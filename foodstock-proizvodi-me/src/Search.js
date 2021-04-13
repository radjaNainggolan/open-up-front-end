import React, { useState , useEffect } from 'react';
import axios from 'axios';
import ProductsList from './ProductsList';

import ReactPaginate from 'react-paginate';
const Search = () => {
    const [products , setProducts] = useState([]);
    const [loading , setLoading] = useState(false);
    const [currentPage , setCurrentPage] = useState(1);
    const [productsPerPage , setProductsPerPage] = useState(2);

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
        <div>
            <div className="h-28 rounded-2xl bg-gradient-to-br from-amber-600 to-red-400 mt-16 ">
                <input type="text" className="ml-16 outline-none my-10 bg-white w-80 px-2 rounded-2xl font-karla"/>
                <a href="" className="rounded-2xl bg-white px-7 py-1 ml-10 font-karla font-semibold border-0 text-red-500">Search</a>
            </div>

            <div className="ml-12">
                {products.length > 0 && <ProductsList data={currentProducts} loa={loading}></ProductsList> }
            </div>
            <div>
                <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                breakLabel={". . ."}
                pageRangeDisplayed={4}
                pageCount={pages}
                onPageChange={paginate}
                containerClassName="flex-wrap flex mb-16 ml-72"
                previousClassName="paging"
                nextClassName="paging "
                nextLinkClassName="outline-none"
                previousLinkClassName="outline-none"
                activeClassName="paging bg-red-500"
                activeLinkClassName="otline-none"
                pageClassName="paging"
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