import React, { useState , useEffect } from 'react';
import axios from 'axios';
import ProductsList from './ProductsList';
import Pagination from './Pagination';
const Search = () => {
    const [products , setProducts] = useState([]);
    const [loading , setLoading] = useState(false);
    const [currentPage , setCurrentPage] = useState(1);
    const [productsPerPage , setProductsPerPage] = useState(20);

    const fetchProducts = async () => {
        setLoading(true);
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setProducts(res.data);
        setLoading(false);
    }

    useEffect( () => {
        fetchProducts();
    }, []);
    console.log(products);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct , indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return ( 
        <div>
            <div className="h-28 rounded-2xl bg-gradient-to-br from-amber-600 to-red-400 mt-16 ">
                <input type="text" className="ml-16 my-10 w-80 px-2 rounded-2xl font-karla"/>
                <a href="" className="rounded-2xl bg-white px-7 py-1 ml-10 font-karla font-semibold border-0 text-red-500">Search</a>
            </div>

            <div>
                {products.length > 0 && <ProductsList data={currentProducts} loa={loading}></ProductsList> }
            </div>
            <div>
                <Pagination productsPerPage={productsPerPage} paginate={paginate} totalProducts={products.length}></Pagination>
            </div>
        </div>
        );
}
 
export default Search;