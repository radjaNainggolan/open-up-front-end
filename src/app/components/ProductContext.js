import React from "react";
import { useState } from "react";

export const ProductContext = React.createContext({});

const ProductProvider = ({ children }) => {
  const [briefDescription, setBriefDescription] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);
  const [discountEndDate, setDiscountEndDate] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [discountStartDate, setDiscountStartDate] = useState(0);
  const [regularPrice, setRegularPrice] = useState(0);
  const [additionalInformation, setAdditionalInformation] = useState("");
  const [alcohol, setAlcohol] = useState("");
  const [allergens, setAllergens] = useState("");
  const [countryOfOrigin, setConutryOfOrigin] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [imports, setImports] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [maintenance, setMaintenance] = useState("");
  const [producer, setProducer] = useState("");
  const [name, setName] = useState("");
  const [nutriScore, setNutriScore] = useState("");
  const [carbs, setCarbs] = useState(0);
  const [energy, setEnergy] = useState(0);
  const [fats, setFats] = useState(0);
  const [fibers, setFibers] = useState(0);
  const [proteins, setProteins] = useState(0);
  const [salt, setSalt] = useState(0);
  const [saturatedFats, setSaturatedFats] = useState(0);
  const [sugar, setSugar] = useState(0.0);
  const [barcode, setBarcode] = useState("");

  return (
    <ProductContext.Provider
      value={{
        briefDescription,
        setBriefDescription,
        category,
        setCategory,
        date,
        setDate,
        discountAmount,
        setDiscountAmount,
        discountEndDate,
        setDiscountEndDate,
        discountPrice,
        setDiscountPrice,
        discountStartDate,
        setDiscountStartDate,
        regularPrice,
        setRegularPrice,
        additionalInformation,
        setAdditionalInformation,
        alcohol,
        setAlcohol,
        allergens,
        setAllergens,
        countryOfOrigin,
        setConutryOfOrigin,
        expiryDate,
        setExpiryDate,
        imports,
        setImports,
        ingredients,
        setIngredients,
        maintenance,
        setMaintenance,
        producer,
        setProducer,
        name,
        setName,
        nutriScore,
        setNutriScore,
        carbs,
        setCarbs,
        energy,
        setEnergy,
        fats,
        setFats,
        fibers,
        setFibers,
        proteins,
        setProteins,
        salt,
        setSalt,
        saturatedFats,
        setSaturatedFats,
        sugar,
        setSugar,
        barcode,
        setBarcode,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
