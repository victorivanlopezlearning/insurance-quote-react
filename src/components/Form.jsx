import { Fragment } from 'react';
import { makes, years, plans } from '../constants';
import useQuote from '../hooks/useQuote';
import ErrorMessage from './ErrorMessage';

export default function Form() {

  const { quotation, createQuotation, error, setError, insuranceQuote } = useQuote();
  const { make, year } = quotation;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(quotation).includes('')) {
      setError('Todos los campos son obligatorios');
      return;
    }
    setError('');
    insuranceQuote();
  }

  return (
    <>
      {error && <ErrorMessage />}
      <form
        onSubmit={handleSubmit}
      >
        <div className="my-5">
          <label htmlFor="make" className="block mb-3 font-bold text-gray-400 uppercase">Marca</label>
          <select
            name="make"
            id="make"
            className="w-full p-3 bg-white border border-gray-200"
            onChange={(e) => createQuotation(e)}
            value={make}
          >
            <option value="">-- Selecciona Marca --</option>
            {makes.map(({ id, name }) => (
              <option
                key={id}
                value={id}
              >
                {name}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5">
          <label htmlFor="year" className="block mb-3 font-bold text-gray-400 uppercase">Año</label>
          <select
            name="year"
            id="year"
            className="w-full p-3 bg-white border border-gray-200"
            onChange={(e) => createQuotation(e)}
            value={year}
          >
            <option value="">-- Selecciona Año --</option>
            {years.map((year) => (
              <option
                key={year}
                value={year}
              >
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5">
          <label htmlFor="plan" className="block mb-3 font-bold text-gray-400 uppercase">Planes</label>
          <div className='flex gap-3 items-center'>
            {plans.map(({ id, name }) => (
              <Fragment
                key={id}
              >
                <label htmlFor={name}>{name}</label>
                <input
                  type="radio"
                  name="plan" id={name}
                  value={id}
                  onChange={(e) => createQuotation(e)}
                />
              </Fragment>
            ))}
          </div>
        </div>

        <input
          type="submit"
          className='w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold'
          value="Cotizar Auto"
        />
      </form>
    </>
  )
}