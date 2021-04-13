import {Link} from 'react-router-dom';
const ProductsList = ({data , loa}) => {
    if(loa){
        return <h2 className="font-karla">Loading...</h2>
    }
    
    return ( 
        <div className=" flex-wrap flex  mt-32 mx-12">
            {data.map( (product) => (
                <div className="product">
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