import AppInsurance from "./components/AppInsurance";
import { QuoteProvider } from "./context/QuoteProvider";

export default function App() {
  return (
    <QuoteProvider>
      <AppInsurance />
    </QuoteProvider>
  )
}