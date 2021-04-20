import { API, graphqlOperation } from 'aws-amplify';
import { getAllProducts } from "./graphql/queries";
import { useState, useEffect } from "react";

const Search2 = () => {
    const[products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, [])

    async function fetchProducts() {
        try {
            const productsData = await API.graphql(graphqlOperation(getAllProducts));
            const products = productsData.data.getAllProducts;
            setProducts(products);
          } 
          
        catch (err) { 
            alert(err); 
          }
    }

    return (  
        <>
        {
        products.map((product, index) => (
            <div key = {product.id ? product.id : index}>
                <h1> {product.name} </h1>
            </div>
        ))}
        </>
    );
}
 
export default Search2;