import useQuote from "../hooks/useQuote";

const ErrorMessage = () => {

  const { error } = useQuote();

  return (
    <div className="text-center border border-red-400 bg-red-100 py-3">
      <p className=" text-red-700 font-bold uppercase"> {error}</p>
    </div>
  )
}

export default ErrorMessage;