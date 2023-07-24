import { createContext } from "react";

const QuoteContext = createContext();

export const QuoteProvider = ({ children }) => {

  return (
    <QuoteContext.Provider
      value={{}}
    >
      {children}
    </QuoteContext.Provider>
  )
}

export default QuoteContext;