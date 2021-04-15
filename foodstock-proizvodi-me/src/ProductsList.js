import {Link} from 'react-router-dom';
const ProductsList = ({data , loa}) => {
    if(loa){
        return <h1 className="font-karla ml-60 mt-96 ">Loading...</h1>
    }
    
    return ( 
        <div className="products-list">
            {data.map( (product) => (
                <div key={product.id} className="product">
                    <Link to= {`/product/${product.id}`}>
                        <img src="" alt="error"/>
                        <h2 className="overflow-hidden">{product.title}</h2>
                        <p className="overflow-hidden">{product.body}..</p>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default ProductsList;