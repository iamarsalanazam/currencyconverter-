import { useEffect, useState } from "react";
import axios from "axios";

export function APICall() {
  const [rates, setRates] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://data.fixer.io/api/latest?access_key=f3d64019f221eb761485d5966de80832"
      )
      .then((response) => {
        setRates(response.data.rates);
      });
  }, []); // Make sure to include an empty dependency array to run this effect only once
  return rates;
}
