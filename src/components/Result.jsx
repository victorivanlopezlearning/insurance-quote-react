import { useMemo, useRef } from "react";
import useQuote from "../hooks/useQuote";
import { makes, plans } from "../constants";

export default function Result() {


  const { quotation, result } = useQuote();

  if (result === '') return;

  const { make, year, plan } = quotation;
  const yearRef = useRef(year);

  const [nameMake] = useMemo(
    () => makes.filter(m => m.id === Number(make)),
    [result]
  );

  const [namePlan] = useMemo(
    () => plans.filter(p => p.id === Number(plan)),
    [result]
  );

  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
      <h2 className="text-gray-600 font-black text-3xl">Resumen</h2>

      <p className="my-2">
        <span className="font-bold">Marca: </span>
        {nameMake.name}
      </p>

      <p className="my-2">
        <span className="font-bold">Plan: </span>
        {namePlan.name}
      </p>

      <p className="my-2">
        <span className="font-bold">Año: </span>
        {yearRef.current}
      </p>

      <p className="my-2 text-2xl">
        <span className="font-bold">Total: </span>
        {result}
      </p>
    </div>
  )
}
