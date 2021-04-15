import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
const AddProduct = () => {
    const [briefDescription , setbriefDescription] = useState('');
    const [category , setCategory] = useState('');
    const [date , setDate] = useState('');
    const [discountAmount , setDiscountAmount] = useState(null);
    const [discountEndDate , setDiscountEndDate] = useState(null);
    const [discountPrice , setDiscountPrice] = useState(null);
    const [discountStartDate , setDiscountStartDate] = useState(null);
    const [regularPrice , setregularPrice] = useState(null);
    const [description , setDescription] = useState('');
    const [name , setName] = useState('');
    const [nutriScore , setNutriScore] = useState(null);
    const [carbs , setCarbs] = useState(null);
    const [energy , setEnergy] = useState(null);
    const [fats , setFats] = useState(null);
    const [fibers , setFibers] = useState(null);
    const [proteins , setProteins] = useState(null);
    const [salt , setSalt] = useState(null);
    const [saturatedFats , setSaturatedFats] = useState(null);
    const [sugar , setSugar] = useState(null);
    const [store , setStore] = useState('');
    
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
          "carbs": carbs,
          "energy": energy,
          "fats": fats,
          "fibers": fibers,
          "proteins": proteins,
          "salt": salt,
          "saturatedFats": saturatedFats,
          "sugar": sugar
        },
        "status": ""
      }
      axios.post('http://localhost:8000/products', product)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    };
    
    return ( 
        <div className="rounded-xl text-white font-karla grid justify-items-center">
            <form onSubmit={handleSubmit} className="bg-gradient-to-br pr-10 grid justify-items-end h-max rounded-xl w-max mt-10 mb-10 from-amber-400 to-red-400"  action="">
                <div className="mt-5 ml-6 text-lg">
                    <label className="" htmlFor="name">Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} className="rounded-xl w-64 focus:outline-none px-3 text-red-500 ml-5" type="text"  />
                    
                </div>
                <div className="mt-5 ml-6 text-lg">
                    <label className="" htmlFor="name">Brief description</label>
                    <input value={briefDescription} onChange={(e) => setbriefDescription(e.target.value)} className="rounded-xl w-64 focus:outline-none px-3 text-red-500 ml-5" type="text"  />
                    
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
                    <select value={nutriScore} onChange={(e) => setNutriScore(e.target.value)} className="w-64 text-red-500 rounded-xl ml-5 focus:outline-none px-3 " name="nutri-score" >
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                    </select>
                    
                </div>
                <div className="mt-5 ml-6 text-lg">
                    <label  htmlFor="name">Energy (KJ/kcal)</label>
                    <input value={energy} onChange={(e) => setEnergy(e.target.value)} className="rounded-xl w-64 focus:outline-none px-3 text-red-500 ml-5" type="number" min="0" step="0.5"  />
                </div>
                <div className="mt-5 ml-6 text-lg">
                    <label  htmlFor="name">Fats (g)</label>
                    <input value={fats} onChange={(e) => setFats(e.target.value)} className="rounded-xl w-64 focus:outline-none px-3 text-red-500 ml-5" type="number" min="0" step="0.5"  />
                </div>
                <div className="mt-5 ml-6 text-lg">
                    <label  htmlFor="name">Saturated fats (g)</label>
                    <input value={saturatedFats} onChange={(e) => setSaturatedFats(e.target.value)} className="rounded-xl w-64 focus:outline-none px-3 text-red-500 ml-5" type="number" min="0" step="0.5"  />
                </div>
                <div className="mt-5 ml-6 text-lg">
                    <label  htmlFor="name">Proteins (g)</label>
                    <input value={proteins} onChange={(e) => setProteins(e.target.value)} className="rounded-xl w-64 focus:outline-none px-3 text-red-500 ml-5" type="number" min="0" step="0.5"  />
                </div>
                <div className="mt-5 ml-6 text-lg">
                    <label  htmlFor="name">Carbonhydrates (g)</label>
                    <input value={carbs} onChange={(e) => setCarbs(e.target.value)} className="rounded-xl w-64 focus:outline-none px-3 text-red-500 ml-5" type="number" min="0" step="0.5"  />
                </div>
                <div className="mt-5 ml-6 text-lg">
                    <label  htmlFor="name">Sugar (g)</label>
                    <input value={sugar} onChange={(e) => setSugar(e.target.value)} className="rounded-xl w-64 focus:outline-none px-3 text-red-500 ml-5" type="number" min="0" step="0.5"  />
                </div>
                <div className="mt-5 ml-6 text-lg">
                    <label  htmlFor="name">Fibers (g)</label>
                    <input value={fibers} onChange={(e) => setFibers(e.target.value)} className="rounded-xl w-64 focus:outline-none px-3 text-red-500 ml-5" type="number" min="0" step="0.5"  />
                </div>
                <div className="mt-5 ml-6 text-lg">
                    <label  htmlFor="name">Salt (g)</label>
                    <input value={salt} onChange={(e) => setSalt(e.target.value)} className="rounded-xl w-64 focus:outline-none px-3 text-red-500 ml-5" type="number" min="0" step="0.5"  />
                </div>
                
                <div className="mt-5 ml-6 text-lg">
                    <label className="" htmlFor="name">Date</label>
                    <input value={date} onChange={(e) => setDate(e.target.value)} className="rounded-xl w-64 focus:outline-none px-3 text-red-500 ml-5" type="date"  />
                    
                </div>
                <div className="mt-5 ml-6 text-lg">
                    <label className="" htmlFor="name">Regular price</label>
                    <input value={regularPrice} onChange={(e) => setregularPrice(e.target.value)} className="rounded-xl w-64 focus:outline-none px-3 text-red-500 ml-5" type="number" min="0" step="0.5"  />
                </div>
                <div className="mt-5 ml-6 text-lg">
                    <label className="" htmlFor="name">Discount amount</label>
                    <input value={discountAmount} onChange={(e) => setDiscountAmount(e.target.value)} className="rounded-xl w-64 focus:outline-none px-3 text-red-500 ml-5" type="number" min="0" step="0.5"  />
                </div>
                <div className="mt-5 ml-6 text-lg">
                    <label className="" htmlFor="name">Discount price</label>
                    <input value={discountPrice} onChange={(e) => setDiscountPrice(e.target.value)} className="rounded-xl w-64 focus:outline-none px-3 text-red-500 ml-5" type="number" min="0" step="0.5"  />
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
        
        </div>
     );
}
 
export default AddProduct;