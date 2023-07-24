import Form from "./Form";

export default function AppInsurance() {
  return (
    <>
      <header className="my-10">
        <h1 className="text-4xl text-white text-center font-black">Cotizador de Seguros de Auto</h1>
      </header>

      <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-5 lg:p-10">
        <Form />
      </main>
    </>
  )
}