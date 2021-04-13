import {Link} from 'react-router-dom';
const ProductsList = ({data , loa}) => {
    if(loa){
        return <h2 className="font-karla ">Loading...</h2>
    }
    
    return ( 
        <div className="grid grid-cols-4 gap-10 mt-14 mx-16 mb-16">
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