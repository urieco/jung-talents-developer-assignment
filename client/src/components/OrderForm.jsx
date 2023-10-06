import React, { useContext } from 'react';
import { AutocompletionContext } from '../contexts/AutocompletionContext';

import Field from './forms/Field';
import TotalAmountGroup from './forms/TotalAmountGroup';
import ConsumerGroup from './forms/ConsumerGroup';
import BillingGroup from './forms/BillingGroup';
import ShippingGroup from './forms/ShippingGroup';
import ItemsGroup from './forms/ItemsGroup';
import DiscountsGroup from './forms/DiscountsAmount';
import MerchantGroup from './forms/MerchantGroup';
import ShippingAmountGroup from './forms/ShippingAmountGroup';
import TaxAmountGroup from './forms/TaxAmountGroup';
import ScalapayWidget from './ScalapayWidget';

function OrderForm() {
  const { setIsAutocomplete } = useContext(AutocompletionContext);

  return (
    <div className="w-screen h-full grid md:place-content-center px-4 pt-8 md:pt-24 pb-8">
      <form
        className="text-gray-200 bg-indigo-700/60 w-full md:w-[45vw] lg:w-[25vw] h-full flex flex-col px-4 pt-8 rounded-lg shadow-lg overflow-auto"
        action="http://localhost:8080/order/"
        method="post"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-center md:py-4">PLACE YOUR ORDER</h1>
        <button
          type="button"
          className="bg-cyan-500 hover:bg-cyan-500/80 font-semibold w-full p-2 rounded-lg shadow-md shadow-cyan-500/80 mx-auto my-6 active:scale-95"
          onClick={() => setIsAutocomplete((prev) => !prev)}
        >
          Quick Autocompletion For Testing
        </button>
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-500/80 font-semibold w-full p-2 rounded-lg shadow-md shadow-red-500/80 mx-auto mt-2 mb-4 active:scale-95"
        >
          Proceed to Checkout
        </button>
        <div
          className="bg-sky-200 text-gray-600 p-2"
        >
          <ScalapayWidget />
        </div>
        <TotalAmountGroup />
        <ConsumerGroup />
        <BillingGroup />
        <ShippingGroup />
        <ItemsGroup />
        <DiscountsGroup />
        <MerchantGroup />
        <Field
          title="Merchant Reference"
          type="text"
          id="merchantReference"
          placeholderText="merchantOrder-1234"
        />
        <ShippingAmountGroup />
        <TaxAmountGroup />
        <div className="mt-2">
          <label htmlFor="installment-select" className="flex flex-col">
            <span className="font-extralight">Choose a payment installments:</span>
            <select
              name="installments"
              id="installment-select"
              className="text-black font-semibold p-2 rounded-lg mt-2 mb-6"
            >
              <option value="pay-in-3" selected>Pay in 3</option>
              <option value="pay-in-4">Pay in 4</option>
              <option value="later">Pay Later</option>
            </select>
          </label>
        </div>
      </form>
    </div>
  );
}

export default OrderForm;
