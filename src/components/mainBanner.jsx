import React, { useEffect, useState } from "react";
import axios from "axios";
function MainBanner() {
  const [rates, setRates] = useState([]);
  const [selectedValues, setSelectedValues] = useState({
    inputAmount: 1,
    selectedValue: "USD",
    selectedValue2: "PKR",
  });
  const [result, setResult] = useState();
  //Getting data from api.
  useEffect(() => {
    axios
      .get(
        "http://data.fixer.io/api/latest?access_key=f3d64019f221eb761485d5966de80832"
      )
      .then((response) => {
        setRates(response.data.rates);
      });
  }, []);
  //Getting values from the Input fields
  const handleInputChange = (e) => {
    setSelectedValues({ ...selectedValues, [e.target.name]: e.target.value });
  };
  //Function for conversions
  const handleConversion = (e) => {
    e.preventDefault();
    const val = Object.entries(rates).filter(([key, value]) => {
      if (key === selectedValues.selectedValue) {
        return value;
      }
    });
    const val2 = Object.entries(rates).filter(([key, value]) => {
      if (key === selectedValues.selectedValue2) {
        return value;
      }
    });
    setResult(selectedValues.inputAmount * (val2[0][1] / val[0][1]));
  };
  return (
    <div className="bg-heroHome w-full h-600 bg-no-repeat bg-cover relative">
      <div className="bg-white w-1/2 m-auto h-60 rounded-lg py-8 absolute left-1/4 -bottom-20 shadow-lg  shadow-zinc-700">
        <form>
          <div className="flex flex-row justify-around mb-4">
            <div className="flex flex-col w-1/4">
              <label
                htmlFor="amount"
                className="text-neutral-950 bold font-semibold mb-2"
              >
                Amount
              </label>
              <input
                id="amount"
                type="number"
                placeholder="Amount"
                value={selectedValues.inputAmount}
                onChange={handleInputChange}
                name="inputAmount"
                className="border border-solid border-stone-400 rounded-md p-2"
              />
            </div>
            <div className="flex flex-col w-1/4">
              <label className="text-neutral-950 bold font-semibold mb-2">
                From
              </label>
              <select
                className="border border-solid border-stone-400 rounded-md p-2"
                value={selectedValues.selectedValue}
                onChange={handleInputChange}
                name="selectedValue"
              >
                {Object.keys(rates).map((rate) => (
                  <option value={rate} key={rate}>
                    {rate}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col w-1/4">
              <label className="text-neutral-950 bold font-semibold mb-2">
                To
              </label>
              <select
                className="border border-solid border-stone-400 rounded-md p-2"
                value={selectedValues.selectedValue2}
                onChange={handleInputChange}
                name="selectedValue2"
              >
                {Object.keys(rates).map((rate) => (
                  <option value={rate} key={rate}>
                    {rate}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex justify-end px-8">
            <button
              className="bg-blue-700 text-white py-2 px-4 rounded"
              onClick={handleConversion}
            >
              Convert
            </button>
          </div>
        </form>
        <div className="px-8">
          {result && (
            <h2>
              <span className="text-neutral-400 mr-2 text-xl">
                {selectedValues.inputAmount}
              </span>
              <span className="text-neutral-500 text-xl">
                {selectedValues.selectedValue}
              </span>{" "}
              =
              <span className="text-slate-700 mx-2 text-3xl">
                {result.toFixed(2)}
              </span>
              <span className="text-black text-3xl">
                {selectedValues.selectedValue2}
              </span>
            </h2>
          )}
        </div>
      </div>
    </div>
  );
}
export default MainBanner;
