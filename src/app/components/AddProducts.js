import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";
import { createProduct } from "app/graphql/mutations";
import { Dialog } from "@headlessui/react";
import { ProductContext } from "app/components/ProductContext";
const AddProduct = () => {
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

  const [one, openOne] = useState(false);
  const [two, openTwo] = useState(false);
  const [three, openThree] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [errOpen, setErrOpen] = useState(false);
  const history = useHistory();

  const Notice = () => {
    return (
      <Dialog
        as="div"
        className="overflow-auto fixed top-2 right-4 ring-2 ring-red-500 grid justify-items-center text-white bg-amber-500 rounded-xl px-5 py-5 w-max h-max z-10"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Dialog.Title className="text-2xl font-karla">
          Successfully submited!
        </Dialog.Title>
        <br />
        <Dialog.Description className="text-lg font-karla">
          New product is added.
        </Dialog.Description>
        <button
          className="px-5 rounded-xl focus:outline-none bg-red-500 hover:ring-2 hover:ring-amber-500"
          onClick={() => {
            setIsOpen(false);
            history.push(`/search`);
          }}
        >
          OK
        </button>
      </Dialog>
    );
  };

  const Error = () => {
    return (
      <Dialog
        as="div"
        className="overflow-auto fixed top-2 right-4 ring-2 ring-red-500 grid justify-items-center text-white bg-amber-500 rounded-xl px-5 py-5 w-max h-max z-10"
        open={errOpen}
        onClose={() => setErrOpen(false)}
      >
        <Dialog.Title className="text-2xl font-karla">
          Ohh, something went wrong...
        </Dialog.Title>
        <br />
        <Dialog.Description className="text-lg font-karla">
          Some error occurred, please try again.
        </Dialog.Description>
        <button
          className="px-5 rounded-xl focus:outline-none bg-red-500 hover:ring-2 hover:ring-amber-500"
          onClick={() => {
            setErrOpen(false);
            history.push(`/search`);
          }}
        >
          OK
        </button>
      </Dialog>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = {
      briefDescription: briefDescription,
      barcode: "",
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
      status: "published",
    };
    API.graphql(graphqlOperation(createProduct, { input: product }))
      .then((res) => {
        setIsOpen(true);
      })
      .catch((err) => {
        alert(JSON.stringify(err, null, 4));
        setErrOpen(true);
      });
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center">
      {isOpen && <Notice></Notice>}
      {errOpen && <Error></Error>}
      {/* slika + naslov */}
      <div className="border rounded-t-lg w-96 py-5 px-4">
        {/* slika */}
        <div className="flex items-center justify-center"></div>
        {/* slika */}

        {/* naslov */}
        <div className="font-regular text-sm flex items-baseline justify-between">
          <p className="font-bold mr-2">Ime proizoda:</p>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <div className="text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </div>
          {/* naslov */}
        </div>
        {/* slika + naslov */}
      </div>
      {/* desc main container */}
      <div className="border-b border-l border-r w-96 py-3 px-5">
        {/* brief desc */}
        <p className="font-bold mr-2">Kratak opis:</p>
        <textarea
          onChange={(e) => setBriefDescription(e.target.value)}
          className="text-gray-600 leading-6 text-sm"
          value={briefDescription}
        />

        {/* brief desc */}
        {/* visible atributi */}
        <div className="text-sm mt-2">
          <div className="flex flex-row mb-3">
            <p className="font-bold mr-2">Kategorija:</p>
            <input
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            />
          </div>
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
          <div className="flex flex-row mb-3">
            <p className="font-bold mr-2">Zemlja porijekla:</p>
            <input
              onChange={(e) => setConutryOfOrigin(e.target.value)}
              value={countryOfOrigin}
            />
          </div>
          <div className="flex flex-row mb-3">
            <p className="font-bold mr-2">Uvoznik:</p>
            <input
              onChange={(e) => setImports(e.target.value)}
              value={imports}
            />
          </div>
          <div className="flex flex-row mb-3">
            <p className="font-bold mr-2">Proizvodjač:</p>
            <input
              onChange={(e) => setProducer(e.target.value)}
              value={producer}
            />
          </div>
          <div className="flex flex-row mb-3">
            <p className="font-bold mr-2">Barcode:</p>
            <input
              onChange={(e) => setBarcode(e.target.value)}
              value={barcode}
            />
          </div>
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
            <div className="flex flex-row mb-3">
              <p className="font-bold mr-2">Energija (kJ/kcal):</p>
              <input
                type="text"
                onChange={(e) => setEnergy(e.target.value)}
                value={energy}
              />
            </div>
            <div className="flex flex-row mb-3">
              <p className="font-bold mr-2">Masti (g):</p>
              <input
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
                type="number"
                min="0"
                step="0.01"
                onChange={(e) => setFibers(e.target.value)}
                value={fibers}
              />
            </div>
            <div className="flex flex-row mb-3">
              <p className="font-bold mr-2">Sećer (g):</p>
              <input
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
            <div className="flex flex-row mb-3">
              <p className="font-bold mr-2">Dodatne informacije:</p>
              <textarea
                onChange={(e) => setAdditionalInformation(e.target.value)}
                value={additionalInformation}
              />
            </div>
            <div className="flex flex-row mb-3">
              <p className="font-bold mr-2">Alkohol:</p>
              <input
                onChange={(e) => setAlcohol(e.target.value)}
                value={alcohol}
              />
            </div>
            <div className="flex flex-row mb-3">
              <p className="font-bold mr-2">Alergeni:</p>
              <input
                onChange={(e) => setAllergens(e.target.value)}
                value={allergens}
              />
            </div>
            <div className="flex flex-row mb-3">
              <p className="font-bold mr-2">Datum isteka roka:</p>
              <input
                type="date"
                onChange={(e) => setExpiryDate(e.target.value)}
                value={expiryDate}
              />
            </div>
            <div className="flex flex-row mb-3">
              <p className="font-bold mr-2">Sastojci:</p>
              <textarea
                onChange={(e) => setIngredients(e.target.value)}
                value={ingredients}
              />
            </div>
            <div className="flex flex-row mb-3">
              <p className="font-bold mr-2">Održavanje:</p>
              <input
                onChange={(e) => setMaintenance(e.target.value)}
                value={maintenance}
              />
            </div>
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
                type="date"
                onChange={(e) => setDate(e.target.value)}
                value={date}
              />
            </div>
            <div className="flex flex-row mb-3">
              <p className="font-bold mr-2">Iznos popusta ({"\u20AC"}):</p>
              <input
                onChange={(e) => setDiscountAmount(e.target.value)}
                value={discountAmount}
              />
            </div>
            <div className="flex flex-row mb-3">
              <p className="font-bold mr-2">Datum početka popusta:</p>
              <input
                type="date"
                onChange={(e) => setDiscountStartDate(e.target.value)}
                value={discountStartDate}
              />
            </div>
            <div className="flex flex-row mb-3">
              <p className="font-bold mr-2">Datum kraja popusta:</p>
              <input
                type="date"
                onChange={(e) => setDiscountEndDate(e.target.value)}
                value={discountEndDate}
              />
            </div>
            <div className="flex flex-row mb-3">
              <p className="font-bold mr-2">Cijena sa popustom ({"\u20AC"}):</p>
              <input
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
          Prihavati
        </button>
      </div>
      {/* dropdown-4 */}
    </div>
  );
};

export default AddProduct;
