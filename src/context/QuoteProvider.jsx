import { createContext, useState } from "react";
import { getDifferenceYear, calculateByMake, calculateByPlan, formatToDollars } from "../helpers";

const QuoteContext = createContext();

export const QuoteProvider = ({ children }) => {

  const [quotation, setQuotation] = useState({
    make: '',
    year: '',
    plan: '',
  });

  const [error, setError] = useState('');
  const [showResult, setShowResult] = useState('');
  const [loading, setLoading] = useState(false);

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
    result *= calculateByMake(quotation.make);
    result *= calculateByPlan(quotation.plan);
    result = formatToDollars(result);
    setLoading(true);
    setTimeout(() => {
      setShowResult(result);
      setLoading(false);
    }, 1500);
  }

  return (
    <QuoteContext.Provider
      value={{
        quotation,
        createQuotation,
        error,
        setError,
        insuranceQuote,
        showResult,
        loading,
      }}
    >
      {children}
    </QuoteContext.Provider>
  )
}

export default QuoteContext;