import {Link} from 'react-router-dom';
const ProductsList = ({data , loa}) => {
    if(loa){
        return <h1 className="font-karla ml-60 mt-96 ">Loading...</h1>
    }
    
    return ( 
        <div className="products-list">
            {data.map( (product) => (
                <div key={product.id} className="product">
                
                    <Link key={product.id} className="grid justify-items-center text-center text-white font-karla font-semibold" to={`/product/${product.id}`}>
                        <img src="" alt="error" className="mb-5"/>
                        <h2 className="overflow-hidden">Name :{product.name}</h2>
                        <ul>
                            <li>Brief description: {product.briefDescription}</li>
                            <li>Category: {product.category}</li>
                            <li>Nutri-score: {product.nutriScore}</li>
                        </ul>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default ProductsList;