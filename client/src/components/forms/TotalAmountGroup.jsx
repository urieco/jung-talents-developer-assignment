import React from 'react';
import FieldGroup from './FieldGroup';
import Field from './Field';

function TotalAmountGroup() {
  const node = (
    <>
      <Field
        title="Amount of the order"
        type="text"
        id="amount"
        placeholderText="190.00"
        isRequired="true"
        acceptPattern="^\d+\.\d{2}$"
      />
      <Field
        title="Currency type"
        type="text"
        id="currency"
        placeholderText="EUR"
        isRequired="true"
        acceptPattern="[A-Z]{3}"
      />
    </>
  );
  return React.createElement(
    FieldGroup,
    {
      title: 'Total Amount of the order',
      id: 'totalAmount',
    },
    node,
  );
}

export default TotalAmountGroup;
