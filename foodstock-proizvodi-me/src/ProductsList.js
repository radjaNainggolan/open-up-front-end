import {Link} from 'react-router-dom';
const ProductsList = ({data , loa}) => {
    if(loa){
        return <h2 className="font-karla ">Loading...</h2>
    }
    
    return ( 
        <div className="grid grid-cols-1 gap-10 mt-14 mb-16 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data.map( (product) => (
                <div key={product.id} className="product">
                    <Link key={product.id} to= {`/product/${product.id}`}>
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