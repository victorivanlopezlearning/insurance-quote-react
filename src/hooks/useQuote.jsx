import { useContext } from "react";
import QuoteContext from "../context/QuoteProvider";

export default function useQuote() {
  return useContext(QuoteContext);
}