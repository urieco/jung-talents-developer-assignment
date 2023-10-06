import React, { useContext } from 'react';
import { AutocompletionContext } from '../contexts/AutocompletionContext';
import TotalAmountGroup from './forms/TotalAmountGroup';

function OrderForm() {
  const { setIsAutocomplete } = useContext(AutocompletionContext);

  return (
    <div className="w-screen h-auto grid md:place-content-center px-4 pt-8 md:pt-24">
      <form className="text-gray-200 bg-indigo-700/60 flex flex-col px-4 pt-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center">PLACE YOUR ORDER</h1>
        <button
          type="button"
          className="bg-cyan-500 hover:bg-cyan-500/80 font-semibold w-full p-2 rounded-lg shadow-lg shadow-cyan-500/80 mx-auto my-6 active:scale-95"
          onClick={() => setIsAutocomplete((prev) => !prev)}
        >
          Quick Autocompletion For Testing
        </button>
        <TotalAmountGroup />
      </form>
    </div>
  );
}

export default OrderForm;
