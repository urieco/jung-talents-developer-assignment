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
        isRequired
        acceptPattern="^\d+\.\d{2}$"
      />
      <Field
        title="Currency Type"
        type="text"
        id="currency"
        placeholderText="EUR"
        isRequired
        acceptPattern="[A-Z]{3}"
      />
    </>
  );
  return React.createElement(
    FieldGroup,
    {
      title: 'Total Amount of the order',
      id: 'totalAmount',
      isVisible: true,
    },
    node,
  );
}

export default TotalAmountGroup;
