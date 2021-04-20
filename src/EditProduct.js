
import { useParams } from "react-router";

import { useState , useEffect } from "react";
import {useHistory } from 'react-router-dom';
import axios from 'axios';
import useData from "./useData";
const EditProduct = () => {
    
    
    const {id} = useParams();

    const {products , loading} = useData('http://localhost:8000/products/'+id);

    const [briefDescription , setBriefDescription] = useState();
    const [category , setCategory] = useState();
    const [date , setDate] = useState();
    const [discountAmount , setDiscountAmount] = useState();
    const [discountEndDate , setDiscountEndDate] = useState();
    const [discountPrice , setDiscountPrice] = useState(0);
    const [discountStartDate , setDiscountStartDate] = useState(0);
    const [regularPrice , setRegularPrice] = useState(0);
    const [description , setDescription] = useState('');
    const [name , setName] = useState('');
    const [nutriScore , setNutriScore] = useState("");
    const [carbs , setCarbs] = useState(0);
    const [energy , setEnergy] = useState(0);
    const [fats , setFats] = useState(0);
    const [fibers , setFibers] = useState(0);
    const [proteins , setProteins] = useState(0);
    const [salt , setSalt] = useState(0);
    const [saturatedFats , setSaturatedFats] = useState(0);
    const [sugar , setSugar] = useState(0);
    const [store , setStore] = useState();
    const history = useHistory();
    
    

    useEffect(() => {

        if(!loading){
            setBriefDescription(products.briefDescription);
            setCategory(products.category);
            setDate(products.currentPrice.date);
            setDescription(products.description);
            setDiscountAmount(products.currentPrice.discountAmount);
            setDiscountEndDate(products.currentPrice.discountEndDate);
            setDiscountStartDate(products.currentPrice.discountStartDate);
            setDiscountPrice(products.currentPrice.discountPrice);
            setRegularPrice(products.currentPrice.regularPrice);
            setStore(products.currentPrice.store);
            setName(products.name);
            setNutriScore(products.nutriScore);
            setCarbs(products.nutritionalValues.carbs);
            setEnergy(products.nutritionalValues.energy);
            setFats(products.nutritionalValues.fats);
            setSaturatedFats(products.nutritionalValues.saturatedFats);
            setProteins(products.nutritionalValues.proteins);
            setSugar(products.nutritionalValues.sugar);
            setFibers(products.nutritionalValues.fibers);
            setSalt(products.nutritionalValues.salt);
        }

    },[loading])


    const handleSubmit = (e) => {
        e.preventDefault();

        

        const product = { 
        "briefDescription": briefDescription,
        "category": category,
        "currentPrice": {
            "date": date,
            "discountAmount": discountAmount,
            "discountEndDate": discountEndDate,
            "discountPrice": discountPrice,
            "discountStartDate": discountStartDate,
            "regularPrice": regularPrice,
            "store": store
        },
        "description": description,
        "name": name,
        "nutriScore": nutriScore,
        "nutritionalValues": {
            "carbs": parseFloat(carbs),
            "energy": energy,
            "fats": parseFloat(fats),
            "fibers": parseFloat(fibers),
            "proteins": parseFloat(proteins),
            "salt": parseFloat(salt),
            "saturatedFats": parseFloat(saturatedFats),
            "sugar": parseFloat(sugar)
        },
        "status": ""
        }
        axios.put('http://localhost:8000/products/'+id, product)
        .then(res => {        
            alert("Successfully submited!");
            history.push('/search');
            
        })
        .catch(err => alert(err));

        

        

    };
    
    return ( 
        <div>
        
        { products &&  !loading && (
        <div className="rounded-xl text-white font-karla grid justify-items-center">
            <form onSubmit={handleSubmit} className="bg-gradient-to-br pr-10 grid justify-items-end h-max rounded-xl w-max mt-10 mb-10 from-amber-400 to-red-400"  action="">
                <div className="mt-5 ml-6 text-lg">
                    <label className="" htmlFor="name">Name </label>
                    <input value={name} onChange={(e) => setName(e.target.value)} className="rounded-xl w-64 focus:outline-none px-3 text-red-500 ml-5" type="text"  />
                    
                </div>
                <div className="mt-5 ml-6 text-lg">
                    <label className="" htmlFor="name">Brief description</label>
                    <input value={briefDescription} onChange={(e) => setBriefDescription(e.target.value)} className="rounded-xl w-64 focus:outline-none px-3 text-red-500 ml-5" type="text"  />
                    
                </div>
                <div className="mt-5 ml-6 text-lg">
                    <label className="" htmlFor="name">Category</label>
                    <input value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-xl w-64 focus:outline-none px-3 text-red-500 ml-5" type="text"  />
                    
                </div>
                <div className="mt-5 ml-6 text-lg flex flex-wrap">
                    <label className="" htmlFor="name">Description</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="rounded-xl w-64 focus:outline-none px-3 text-red-500 ml-5" type="text"  />
                    
                </div>
                <div className="mt-5 ml-6 text-lg">
                    <label className="" htmlFor="name">Nutri-score</label>
                    <select value={nutriScore} defaultValue="" onChange={(e) => setNutriScore(e.target.value)} className="w-64 text-red-500 rounded-xl ml-5 focus:outline-none px-3 " name="nutri-score" >
                        <option value="">none</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                    </select>
                    
                </div>
                <div className="mt-5 ml-6 text-lg">
                    <label  htmlFor="name">Energy (KJ/kcal)</label>
                    <input value={energy} onChange={(e) => setEnergy(e.target.value)} className="rounded-xl w-64 focus:outline-none px-3 text-red-500 ml-5" type="text" min="0" step="0.01"  />
                </div>
                <div className="mt-5 ml-6 text-lg">
                    <label  htmlFor="name">Fats (g)</label>
                    <input value={fats} onChange={(e) => setFats(e.target.value)} className="rounded-xl w-64 focus:outline-none px-3 text-red-500 ml-5" type="number" min="0" step="0.01"  />
                </div>
                <div className="mt-5 ml-6 text-lg">
                    <label  htmlFor="name">Saturated fats (g)</label>
                    <input value={saturatedFats} onChange={(e) => setSaturatedFats(e.target.value)} className="rounded-xl w-64 focus:outline-none px-3 text-red-500 ml-5" type="number" min="0" step="0.01"  />
                </div>
                <div className="mt-5 ml-6 text-lg">
                    <label  htmlFor="name">Proteins (g)</label>
                    <input value={proteins} onChange={(e) => setProteins(e.target.value)} className="rounded-xl w-64 focus:outline-none px-3 text-red-500 ml-5" type="number" min="0" step="0.01"  />
                </div>
                <div className="mt-5 ml-6 text-lg">
                    <label  htmlFor="name">Carbonhydrates (g)</label>
                    <input value={carbs} onChange={(e) => setCarbs(e.target.value)} className="rounded-xl w-64 focus:outline-none px-3 text-red-500 ml-5" type="number" min="0" step="0.01"  />
                </div>
                <div className="mt-5 ml-6 text-lg">
                    <label  htmlFor="name">Sugar (g)</label>
                    <input value={sugar} onChange={(e) => setSugar(e.target.value)} className="rounded-xl w-64 focus:outline-none px-3 text-red-500 ml-5" type="number" min="0" step="0.01"  />
                </div>
                <div className="mt-5 ml-6 text-lg">
                    <label  htmlFor="name">Fibers (g)</label>
                    <input value={fibers} onChange={(e) => setFibers(e.target.value)} className="rounded-xl w-64 focus:outline-none px-3 text-red-500 ml-5" type="number" min="0" step="0.01"  />
                </div>
                <div className="mt-5 ml-6 text-lg">
                    <label  htmlFor="name">Salt (g)</label>
                    <input value={salt} onChange={(e) => setSalt(e.target.value)} className="rounded-xl w-64 focus:outline-none px-3 text-red-500 ml-5" type="number" min="0" step="0.01"  />
                </div>
                
                <div className="mt-5 ml-6 text-lg">
                    <label className="" htmlFor="name">Date</label>
                    <input value={date} onChange={(e) => setDate(e.target.value)} className="rounded-xl w-64 focus:outline-none px-3 text-red-500 ml-5" type="date"  />
                    
                </div>
                <div className="mt-5 ml-6 text-lg">
                    <label className="" htmlFor="name">Regular price</label>
                    <input value={regularPrice} onChange={(e) => setRegularPrice(e.target.value)} className="rounded-xl w-64 focus:outline-none px-3 text-red-500 ml-5" type="number" min="0" step="0.01"  />
                </div>
                <div className="mt-5 ml-6 text-lg">
                    <label className="" htmlFor="name">Discount amount</label>
                    <input value={discountAmount} onChange={(e) => setDiscountAmount(e.target.value)} className="rounded-xl w-64 focus:outline-none px-3 text-red-500 ml-5" type="number" min="0" step="0.01"  />
                </div>
                <div className="mt-5 ml-6 text-lg">
                    <label className="" htmlFor="name">Discount price</label>
                    <input value={discountPrice} onChange={(e) => setDiscountPrice(e.target.value)} className="rounded-xl w-64 focus:outline-none px-3 text-red-500 ml-5" type="number" min="0" step="0.01"  />
                </div>

                <div className="mt-5 ml-6 text-lg">
                    <label className="" htmlFor="name">Discount start date</label>
                    <input value={discountStartDate} onChange={(e) => setDiscountStartDate(e.target.value)} className="rounded-xl w-64 focus:outline-none px-3 text-red-500 ml-5" type="date"  />
                </div>
                <div className="mt-5 ml-6 text-lg">
                    <label className="" htmlFor="name">Discount end date</label>
                    <input value={discountEndDate} onChange={(e) => setDiscountEndDate(e.target.value)} className="rounded-xl w-64 focus:outline-none px-3 text-red-500 ml-5" type="date" />
                </div>
                <div className="mt-5 mb-5 ml-6 text-lg">
                    <label className="" htmlFor="name">Store</label>
                    <input value={store} onChange={(e) => setStore(e.target.value)} className="rounded-xl w-64 focus:outline-none px-3 text-red-500 ml-5" type="text"  />
                </div>
                <button className="mt-5 px-6 rounded-xl focus:outline-none bg-white hover:ring-amber-600 text-amber-600 hover:ring-2 font-karla font-semibold text-lg mb-10" to="/search">
                    Submit
                </button>
            </form>
        
        </div>)}
        </div>
     );
}
 
export default EditProduct;