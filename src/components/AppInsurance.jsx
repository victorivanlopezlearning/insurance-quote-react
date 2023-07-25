import useQuote from "../hooks/useQuote";
import Form from "./Form";
import Result from "./Result";
import Spinner from "./Spinner";

export default function AppInsurance() {

  const { loading } = useQuote();

  return (
    <>
      <header className="my-10">
        <h1 className="text-4xl text-white text-center font-black">Cotizador de Seguros de Auto</h1>
      </header>

      <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-5 lg:p-10">
        <Form />
        {loading ? <Spinner /> : <Result />}
      </main>
    </>
  )
}