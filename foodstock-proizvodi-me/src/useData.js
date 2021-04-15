import {useState , useEffect } from 'react';
import axios from 'axios';

const useData = (url) => {
    const [products , setProducts] = useState([]);
    const [loading , setLoading] = useState(false);
        
    useEffect( () => {
        axios.get(url)
        .then(res => setProducts(res.data))
        .catch(err => console.log(err));
    } , [url])

    return {products , loading};
}

export default useData;