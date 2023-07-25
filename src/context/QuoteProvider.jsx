import { createContext, useState } from "react";
import { getDifferenceYear } from "../helpers";

const QuoteContext = createContext();

export const QuoteProvider = ({ children }) => {

  const [quotation, setQuotation] = useState({
    make: '',
    year: '',
    plan: '',
  });

  const [error, setError] = useState('');

  const createQuotation = (e) => {
    setQuotation({
      ...quotation,
      [e.target.name]: e.target.value
    })
  }

  const insuranceQuote = () => {
    let result = 2000;
    const differenceYear = getDifferenceYear(quotation.year);
    result -= ((differenceYear * 3) * result) / 100;
    
  }

  return (
    <QuoteContext.Provider
      value={{
        quotation,
        createQuotation,
        error,
        setError,
        insuranceQuote,
      }}
    >
      {children}
    </QuoteContext.Provider>
  )
}

export default QuoteContext;