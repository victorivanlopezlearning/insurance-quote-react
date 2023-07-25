import useQuote from "../hooks/useQuote";
import Form from "./Form";
import Result from "./Result";
import Spinner from "./Spinner";

export default function AppInsurance() {

  const { loading } = useQuote();

  return (
    <>
      <header className="my-10">
        <h1 className="text-4xl text-white text-center font-black">Cotizador Seguro de Auto</h1>
      </header>

      <main className="mx-2 my-10 md:my-0 md:max-w-xl md:mx-auto shadow rounded-lg p-5 lg:p-10 overflow-hidden bg-white ">
        <Form />
        {loading ? <Spinner /> : <Result />}
      </main>
    </>
  )
}