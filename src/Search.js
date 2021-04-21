import React, { useState ,useEffect } from 'react';
import ProductsList from './ProductsList';
import ReactPaginate from 'react-paginate';
import {Link} from 'react-router-dom';
import stringSimilarity from 'string-similarity';
import { API, graphqlOperation } from 'aws-amplify';
import { getAllProducts } from "./graphql/queries";
const Search = () => {
    
    const[products, setProducts] = useState([]);
    const [loading , setLoading] = useState(true);
    useEffect(() => {
        fetchProducts();
    }, [])

    async function fetchProducts() {
        try {
            setLoading(true);
            const productsData = await API.graphql(graphqlOperation(getAllProducts));
            const produ = productsData.data.getAllProducts;
            setProducts(produ);
            setLoading(false);
        } 
          
        catch (err) { 
            alert(err.status); 
        }
    }


    const [currentPage , setCurrentPage] = useState(0);
    const [search , setSearch] = useState('');
    const productsPerPage = 16;
    
    const indexOfLastProduct = currentPage * productsPerPage;
    let currentProducts = products.slice(indexOfLastProduct , indexOfLastProduct + productsPerPage);
    let prods = 0;
    
    if(search !== ''){
        prods = products.filter(prod => stringSimilarity.compareTwoStrings(prod.name, search) > 0.000001);
        currentProducts = prods.slice(indexOfLastProduct , indexOfLastProduct + productsPerPage);
    }
    
    const pages = Math.ceil(products.length/productsPerPage);
    const paginate = ({selected}) => setCurrentPage(selected);
    
    return ( 
        <div className="">
            <div className="search ">
                <div>
                    <input type="text" value={search} onChange= {e => setSearch(e.target.value)} className="input"/><br/>
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