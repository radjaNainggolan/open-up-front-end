import React, { useState, useContext } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // required import for Carousel
import { useParams } from "react-router";
//import { Link } from "react-router-dom";
import { getProduct } from "app/graphql/queries";
import { updateProduct } from "app/graphql/mutations";
import { ProductContext } from "app/components/ProductContext";
import TextareaField from "./TextareaField";
import Input from "./Input";

const Proizvod = () => {
  const [one, openOne] = useState(false);
  const [two, openTwo] = useState(false);
  const [three, openThree] = useState(false);
  const [product, setProduct] = useState(undefined);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Render the Carousel image slider
  const RenderImageSlider = () => {
    if (!product.images || product.images.length === 0) {
      return <></>;
    }

    return (
      <Carousel
        showThumbs={false}
        showStatus={false}
        className="rounded-xl my-2 w-80 h-80"
      >
        {product.images.map((image) => (
          <img key={image} src={image} alt="error" className="my-5 w-72 h-72" />
        ))}
      </Carousel>
    );
  };

  async function fetchProduct() {
    try {
      setLoading(true);
      const productData = await API.graphql(
        graphqlOperation(getProduct, { id: id })
      );

      const prod = productData.data.getProduct;

      // Remove duplicate pictures for products from IDEA
      if (prod.store === "idea") {
        const regex = /_[123456789]\d*[l][.](jpg|jpeg|png)/;
        const newImages = prod.images.filter((image) => regex.test(image));
        prod.images = newImages;
      }

      setProduct(prod);
      setLoading(false);
    } catch (err) {
      console.log(err);
      alert(err.status);
    }
  }

  const context = useContext(ProductContext);
  const {
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
  } = context;

  useEffect(() => {
    if (!loading) {
      setBriefDescription(product.briefDescription);
      setCategory(product.category);
      setDate(product.currentPrice.date);
      setAlcohol(product.description.alcohol);
      setAllergens(product.description.allergens);
      setConutryOfOrigin(product.description.countryOfOrigin);
      setExpiryDate(product.description.expiryDate);
      setImports(product.description.imports);
      setIngredients(product.description.ingredients);
      setMaintenance(product.description.maintenance);
      setProducer(product.description.producer);
      setAdditionalInformation(product.description.additionalInformation);
      setDiscountAmount(product.currentPrice.discountAmount);
      setDiscountEndDate(product.currentPrice.discountEndDate);
      setDiscountStartDate(product.currentPrice.discountStartDate);
      setDiscountPrice(product.currentPrice.discountPrice);
      setRegularPrice(product.currentPrice.regularPrice);
      setName(product.name);
      setNutriScore(product.nutriScore);
      setCarbs(product.nutritionalValues.carbs);
      setEnergy(product.nutritionalValues.energy);
      setFats(product.nutritionalValues.fats);
      setSaturatedFats(product.nutritionalValues.saturatedFats);
      setProteins(product.nutritionalValues.proteins);
      setSugar(product.nutritionalValues.sugar);
      setFibers(product.nutritionalValues.fibers);
      setSalt(product.nutritionalValues.salt);

      setBarcode(product.barcode);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, product]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const Product = {
      id: id,
      barcode: barcode,
      briefDescription: briefDescription,
      category: category,
      currentPrice: {
        date: date,
        discountAmount: discountAmount,
        discountEndDate: discountEndDate,
        discountPrice: discountPrice,
        discountStartDate: discountStartDate,
        regularPrice: regularPrice,
      },
      description: {
        additionalInformation: additionalInformation,
        alcohol: alcohol,
        allergens: allergens,
        countryOfOrigin: countryOfOrigin,
        expiryDate: expiryDate,
        imports: imports,
        ingredients: ingredients,
        maintenance: maintenance,
        producer: producer,
      },
      name: name,
      nutriScore: nutriScore,
      nutritionalValues: {
        carbs: parseFloat(carbs),
        energy: energy,
        fats: parseFloat(fats),
        fibers: parseFloat(fibers),
        proteins: parseFloat(proteins),
        salt: parseFloat(salt),
        saturatedFats: parseFloat(saturatedFats),
        sugar: parseFloat(sugar),
      },
      status: product.status,
    };

    API.graphql(graphqlOperation(updateProduct, { input: Product }))
      .then((res) => {
        alert("shit");
        //history.push(`/product/${id}`, { success: true });
      })
      .catch((err) => {
        alert(JSON.stringify(err, null, 4));
      });
  };

  if (loading) {
    return (
      <div className="h-8 my-48 flex justify-center items-center">
        <div className="bg-purple-900 p-5 rounded-full flex space-x-3 duration-500">
          <div className="w-5 h-5 bg-purple-800 rounded-xl animate-bounce delay-100"></div>
          <div className="w-5 h-5 bg-purple-800 rounded-xl animate-bounce delay-400"></div>
          <div className="w-5 h-5 bg-purple-800 rounded-xl animate-bounce delay-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center">
      {/* slika + naslov */}
      <div className="border rounded-t-lg w-96 py-5 px-4">
        {/* slika */}
        <div className="flex items-center justify-center">
          <RenderImageSlider />
        </div>
        {/* slika */}

        {/* naslov */}
        <div className="font-regular text-2xl flex items-baseline justify-start">
          <p>{name}</p>

          {/* naslov */}
        </div>
        {/* slika + naslov */}
      </div>
      {/* desc main container */}
      <div className="border-b border-l border-r w-96 py-3 px-5">
        {/* brief desc */}
        <p className="text-gray-600 leading-6 text-sm">{briefDescription}</p>
        {/* brief desc */}
        {/* visible atributi */}
        <div className="text-sm mt-2">
          <Input label="Kategorija:" value={category} setValue={setCategory} />

          <div className="flex flex-row mb-3">
            <p className="font-bold mr-2">Nutri score:</p>
            <select
              value={nutriScore}
              defaultValue=""
              onChange={(e) => setNutriScore(e.target.value)}
            >
              <option value="">none</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
          </div>
          <Input
            label="Zemlja porijekla"
            value={countryOfOrigin}
            setValue={setConutryOfOrigin}
          />
          <Input label="Uvoznik" value={imports} setValue={setImports} />
          <Input label="Proizvodjač" value={producer} setValue={setProducer} />
          <Input label="Barcode" value={barcode} setValue={setBarcode} />
        </div>
      </div>
      {/* desc main container */}

      {/* dropdown-1 */}
      <div className="border-b border-l border-r w-96 py-3 px-5">
        <div className="flex flex-row justify-between items-center">
          <p>Nutritivne vrijednosti (na 100g)</p>
          <div
            onClick={() => {
              one ? openOne(false) : openOne(true);
            }}
            className="text-gray-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        {/* dropdown koji se otvara */}
        <div className={`${one ? "" : "hidden"}`}>
          <div className="text-sm mt-2">
            <Input
              label="Energija (kJ/kcal):"
              value={energy}
              setValue={setEnergy}
            />

            <div className="flex flex-row mb-3">
              <p className="font-bold mr-2">Masti (g):</p>
              <input
                className="focus:outline-none"
                type="number"
                min="0"
                step="0.01"
                onChange={(e) => setFats(e.target.value)}
                value={fats}
              />
            </div>
            <div className="flex flex-row mb-3">
              <p className="font-bold mr-2">Zasićene masti (g):</p>
              <input
                className="focus:outline-none"
                type="number"
                min="0"
                step="0.01"
                onChange={(e) => setSaturatedFats(e.target.value)}
                value={saturatedFats}
              />
            </div>
            <div className="flex flex-row mb-3">
              <p className="font-bold mr-2">Proteini (g):</p>
              <input
                className="focus:outline-none"
                type="number"
                min="0"
                step="0.01"
                onChange={(e) => setProteins(e.target.value)}
                value={proteins}
              />
            </div>
            <div className="flex flex-row mb-3">
              <p className="font-bold mr-2">Ugljeni hidrati (g):</p>
              <input
                className="focus:outline-none"
                type="number"
                min="0"
                step="0.01"
                onChange={(e) => setCarbs(e.target.value)}
                value={carbs}
              />
            </div>
            <div className="flex flex-row mb-3">
              <p className="font-bold mr-2">Vlakna (g):</p>
              <input
                className="focus:outline-none"
                type="number"
                min="0"
                step="0.01"
                onChange={(e) => setFibers(e.target.value)}
                value={fibers}
              />
            </div>
            <div className="flex flex-row mb-3">
              <p className="font-bold mr-2">Šećer (g):</p>
              <input
                className="focus:outline-none"
                type="number"
                min="0"
                step="0.01"
                onChange={(e) => setSugar(e.target.value)}
                value={sugar}
              />
            </div>
            <div className="flex flex-row mb-3">
              <p className="font-bold mr-2">So (g):</p>
              <input
                className="focus:outline-none"
                type="number"
                min="0"
                step="0.01"
                onChange={(e) => setSalt(e.target.value)}
                value={salt}
              />
            </div>
          </div>
        </div>
        {/* dropdown koji se otvara */}
      </div>
      {/* dropdown-1 */}

      {/* dropdown-2 */}
      <div className="border-b border-l border-r w-96 py-3 px-5">
        <div className="flex flex-row justify-between items-center">
          <p>Detaljan opis</p>
          <div
            onClick={() => {
              two ? openTwo(false) : openTwo(true);
            }}
            className="text-gray-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        {/* dropdown koji se otvara */}
        <div className={`${two ? "" : "hidden"}`}>
          <div className="text-sm mt-2">
            <TextareaField
              label="Dodatne informacije"
              value={additionalInformation}
              setValue={setAdditionalInformation}
            />
            <Input label="Alkohol" value={alcohol} setValue={setAlcohol} />
            <Input label="Alergeni" value={allergens} setValue={setAllergens} />

            <div className="flex flex-row mb-3">
              <p className="font-bold mr-2">Datum isteka roka:</p>
              <input
                className="focus:outline-none"
                type="date"
                onChange={(e) => setExpiryDate(e.target.value)}
                value={expiryDate}
              />
            </div>

            <TextareaField
              label="Sastojci"
              value={ingredients}
              setValue={setIngredients}
            />
            {/* <div className="flex flex-row mb-3">
              <p className="font-bold mr-2">Sastojci:</p>
              <p onClick={}>{ingredients}</p>
              <textarea
                onChange={(e) => setIngredients(e.target.value)}
                value={ingredients}
              />
            </div> */}
            <Input
              label="Održavanje"
              value={maintenance}
              setValue={setMaintenance}
            />
          </div>
        </div>
        {/* dropdown koji se otvara */}
      </div>
      {/* dropdown-2 */}

      {/* dropdown-3 */}
      <div className="border-b border-l border-r w-96 py-3 px-5">
        <div className="flex flex-row justify-between items-center">
          <p>Cijena</p>
          <div
            onClick={() => {
              three ? openThree(false) : openThree(true);
            }}
            className="text-gray-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        {/* dropdown koji se otvara */}
        <div className={`${three ? "" : "hidden"}`}>
          <div className="text-sm mt-2">
            <div className="flex flex-row mb-3">
              <p className="font-bold mr-2">Podaci od:</p>
              <input
                className="focus:outline-none"
                type="date"
                onChange={(e) => setDate(e.target.value)}
                value={date}
              />
            </div>
            <div className="flex flex-row mb-3">
              <p className="font-bold mr-2">Iznos popusta ({"\u20AC"}):</p>
              <input
                className="focus:outline-none"
                onChange={(e) => setDiscountAmount(e.target.value)}
                value={discountAmount}
              />
            </div>
            <div className="flex flex-row mb-3">
              <p className="font-bold mr-2">Datum početka popusta:</p>
              <input
                className="focus:outline-none"
                type="date"
                onChange={(e) => setDiscountStartDate(e.target.value)}
                value={discountStartDate}
              />
            </div>
            <div className="flex flex-row mb-3">
              <p className="font-bold mr-2">Datum kraja popusta:</p>
              <input
                className="focus:outline-none"
                type="date"
                onChange={(e) => setDiscountEndDate(e.target.value)}
                value={discountEndDate}
              />
            </div>
            <div className="flex flex-row mb-3">
              <p className="font-bold mr-2">Cijena sa popustom ({"\u20AC"}):</p>
              <input
                className="focus:outline-none"
                type="number"
                min="0"
                step="0.01"
                onChange={(e) => setDiscountPrice(e.target.value)}
                value={discountPrice}
              />
            </div>
            <div className="flex flex-row mb-3">
              <p className="font-bold mr-2">Regularna cijena ({"\u20AC"}):</p>
              <input
                className="focus:outline-none "
                type="number"
                min="0"
                step="0.01"
                onChange={(e) => setRegularPrice(e.target.value)}
                value={regularPrice}
              />
            </div>
          </div>
        </div>
        {/* dropdown koji se otvara */}
      </div>
      {/* dropdown-3 */}

      {/* dropdown-4 */}
      <div className="border-b border-l border-r rounded-b-lg w-96 py-3 px-5 text-sm flex justify-center">
        <button
          className="px-2 text-xl border rounded-md hover:bg-purple-800 active:outline-none focus:outline-none"
          onClick={handleSubmit}
        >
          Prihvati
        </button>
      </div>
      {/* dropdown-4 */}
    </div>
  );
};

export default Proizvod;
