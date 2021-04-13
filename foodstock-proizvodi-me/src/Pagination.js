import {Link} from 'react-router-dom'
const Pagination = ( {productsPerPage , totalProducts, paginate} ) => {
    
    const pageNumber = [];
    
    for(let i = 1; i < Math.ceil(totalProducts/productsPerPage); i++){
        pageNumber.push(i);
    }

    return ( 

        <nav className="mb-24">
            <ul className="flex-wrap flex mx-72">
                {pageNumber.map( number => (
                    <li>
                        <Link to="/search" onClick = {() => paginate(number)} className="bg-red-500  mx-5 px-14 font-karla rounded-2xl ">{number}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
export default Pagination; 

 