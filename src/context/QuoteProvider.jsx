import { createContext, useState } from "react";

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

  return (
    <QuoteContext.Provider
      value={{
        quotation,
        createQuotation,
        error,
        setError,
      }}
    >
      {children}
    </QuoteContext.Provider>
  )
}

export default QuoteContext;