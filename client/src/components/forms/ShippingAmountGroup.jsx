import React from 'react';
import FieldGroup from './FieldGroup';
import Field from './Field';

function ShippingAmountGroup() {
  const node = (
    <>
      <Field
        title="Shipping Amount"
        type="text"
        id="shippingAmount"
        placeholderText="10.00"
        acceptPattern="^\d+\.\d{2}$"
      />
      <Field
        title="Shipping Amount Currency"
        type="text"
        id="shippingAmountCurrency"
        placeholderText="EUR"
        acceptPattern="[A-Z]{3}"
      />
    </>
  );
  return React.createElement(
    FieldGroup,
    {
      title: 'Total Shipping Amount',
      id: 'totalShippingAmount',
    },
    node,
  );
}

export default ShippingAmountGroup;
