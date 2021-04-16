import axios from "axios";
import { useEffect } from "react";
import { isElementOfType } from "react-dom/test-utils";
import { useHistory, useParams } from "react-router";
import useData from './useData';
const ProductDetails = () => {
    
    const {id} = useParams();
    console.log(id);
    const {products , loading} = useData('http://localhost:8000/products/'+id);
    
    console.log(products);
    return ( 
        
        <div>
        <div className="grid justify-items-center mb-16 grid-cols-1 ">
            <div className="w-60 h-80  margin-auto bg-gradient-to-br from-amber-400 to-red-400 rounded-xl mt-10 mb-5 ">
                <img src="" alt="error" className=""/>
            </div>
            
            <div className="w-96 text-center font-karla font-semibold text-white text-base h-max bg-gradient-to-l rounded-xl from-amber-400 to-red-400 py-5 mb-5 ">
                <h1 className="text-3xl">{products.name}</h1>
                <br/>
                <ul>
                    <li>Brief description:<br/>
                    {products.briefDescription}
                    </li>
                    <br/>
                    <li>Category: {products.category}</li>
                    <br/>
                    <li>Nutri-score: <span>{products.nutriScore}</span></li>
                </ul>
            </div>
            
            <div className="hidden xs:block mb-5">
                <table className="table ">
                    <tbody className="">
                        <tr className=" border-b-2 solid border-amber-500 border-collapse">
                            <td className="border-r-2 solid border-amber-500 w-44 h-36">
                                <div className="grid justify-items-center px-5">
                                    <img className="w-10 h-10 text-white mb-2" src="https://www.flaticon.com/svg/vstatic/svg/2731/2731636.svg?token=exp=1618443062~hmac=f976ba7b6b0cafe66f9a7558cf0b5a05" alt=""/>
                                    <h4 className="font-karla font-semibold text-base"> Energy</h4>
                                    <h5>{products.nutritionalValues.energy} (KJ/kcal)</h5>
                                </div>
                            </td>
                            
                            <td className="border-r-2 solid border-amber-500 w-44 h-36">
                                <div className="grid justify-items-center px-5">
                                    <img className="w-10 h-10 text-white mb-2" src="https://www.flaticon.com/svg/vstatic/svg/1497/1497035.svg?token=exp=1618443559~hmac=328129409d7083cf3a797bf1d2d92e84" alt=""/>
                                    <h4 className="font-karla font-semibold text-base">Fats</h4>
                                    <h5>{products.nutritionalValues.fats} (g)</h5>
                                </div>
                            </td>
                            <td className="border-r-2 solid border-amber-500 w-44 h-36">
                                <div className="grid justify-items-center px-5 ">
                                    <img className="w-10 h-10 text-white mb-2" src="https://www.flaticon.com/svg/vstatic/svg/2400/2400736.svg?token=exp=1618443911~hmac=9cb4f3039f337185eb8835d3fc20e3e2" alt=""/>
                                    <h4 className="font-karla font-semibold text-base">Saturated fats</h4>
                                    <h5>{products.nutritionalValues.saturatedFats} (g)</h5>
                                </div>
                            </td>
                            <td className="w-44 h-36">
                                <div className="grid justify-items-center px-5 ">
                                    <img className="w-10 h-10 text-white mb-2" src="https://www.flaticon.com/svg/vstatic/svg/2731/2731636.svg?token=exp=1618443062~hmac=f976ba7b6b0cafe66f9a7558cf0b5a05" alt=""/>
                                    <h4 className="font-karla font-semibold text-base">Proteins</h4>
                                    <h5>{products.nutritionalValues.proteins} (g)</h5>
                                </div>
                            </td>
                            
                        </tr>
                        <tr>
                            <td className="border-r-2 solid border-amber-500 w-44 h-36">
                                <div className="grid justify-items-center px-5 mt-3">
                                    <img className="w-10 h-10 text-white mb-2" src="https://www.flaticon.com/svg/vstatic/svg/1929/1929710.svg?token=exp=1618445831~hmac=1cd171c50b4dd81bf617386c26a49793" alt=""/>
                                    <h4 className="font-karla font-semibold text-base"> <span> Carbohydrates </span></h4>
                                    <h5>{products.nutritionalValues.carbs} (g)</h5>
                                </div>
                            </td>
                            
                            <td className="border-r-2 solid border-amber-500 w-44 h-36">
                                <div className="grid justify-items-center px-5 mt-3">
                                    <img className="w-10 h-10 text-white mb-2" src="https://www.flaticon.com/svg/vstatic/svg/4142/4142959.svg?token=exp=1618446023~hmac=01de19378491426acd89f5dcfe27a8c1" alt=""/>
                                    <h4 className="font-karla font-semibold text-base">Sugar</h4>
                                    <h5>{products.nutritionalValues.sugar} (g)</h5>
                                </div>
                            </td>
                            <td className="border-r-2 solid border-amber-500 w-44 h-36">
                                <div className="grid justify-items-center px-5 mt-3 ">
                                    <img className="w-10 h-10 text-white mb-2" src="https://www.flaticon.com/svg/vstatic/svg/2689/2689434.svg?token=exp=1618446441~hmac=fea48023926a404507aca6f1058de134" alt=""/>
                                    <h4 className="font-karla font-semibold text-base">Fibers</h4>
                                    <h5>{products.nutritionalValues.fibers} (g)</h5>
                                </div>
                            </td >
                            <td className="w-44 h-36">
                                <div className="grid justify-items-center px-5 mt-3">
                                    <img className="w-10 h-10 text-white mb-2  " src="https://www.flaticon.com/svg/vstatic/svg/1094/1094680.svg?token=exp=1618446472~hmac=010eb83a8e43f553da0b13d6823d66ec" alt=""/>
                                    <h4 className="font-karla font-semibold text-base">Salt</h4>
                                    <h5>{products.nutritionalValues.salt}(g)</h5>
                                </div>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
            
            <div className="w-full text-center font-karla font-semibold text-white text-xl h-max bg-gradient-to-l rounded-xl from-amber-400 to-red-400 py-5 mb-5 ">
                <ul>
                    <li>Energy: {products.nutritionalValues.energy} (KJ/kcal)</li>
                    <li>Fats: {products.nutritionalValues.fats} (g)</li>
                    <li>Saturated fats: {products.nutritionalValues.saturatedFats} (g)</li>
                    <li>Proteins: {products.nutritionalValues.proteins} (g)</li>
                    <li>Crabonhydrates: {products.nutritionalValues.carbs} (g)</li>
                    <li>Sugar: {products.nutritionalValues.sugar} (g)</li>
                    <li>Fibers: {products.nutritionalValues.fibers}  (g)</li>
                    <li>Salt: {products.nutritionalValues.salt} (g)</li>
                </ul>
            </div>

            <div className="w-full h-max bg-gradient-to-l justify-items-start rounded-xl text-center font-karla font-semibold text-white text-xl from-amber-400 to-red-400 py-5 mb-5 " >
                <ul>Date: {products.currentPrice.date} </ul>
                <ul>Discount amount: {products.currentPrice.discountAmount} </ul>
                <ul>Discount end date: {products.currentPrice.discountEndDate} </ul>
                <ul>Discount price: {products.currentPrice.discountPrice} </ul>
                <ul>Dsicount start date: {products.currentPrice.discountStartDate} </ul>
                <ul>Regular price: {products.currentPrice.regularPrice} </ul>
                <ul>Store: {products.currentPrice.store} </ul>
            </div>

            <div>
                <button className="mt-5 px-6 rounded-xl focus:outline-none bg-red-500 font-karla font-semibold text-lg text-white">
                    Edit
                </button>
            </div>


        </div> 
        </div>
    );
}
 
export default ProductDetails;