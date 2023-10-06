import React from 'react';
import FieldGroup from './FieldGroup';
import Field from './Field';

function DiscountsGroup() {
  const node = (
    <>
      <Field
        title="Discount Amount"
        type="text"
        id="discounts-amount"
        placeholderText="3.00"
        isRequired
        acceptPattern="^\d+\.\d{2}$"
      />
      <Field
        title="Discount Currency"
        type="text"
        id="discounts-currency"
        placeholderText="EUR"
        isRequired
        acceptPattern="[A-Z]{3}"
      />
      <Field
        title="Discount Description"
        type="text"
        id="discounts-displayName"
        placeholderText="10% Off"
      />
    </>
  );
  return React.createElement(
    FieldGroup,
    {
      title: 'Discounts',
      id: 'discounts',
    },
    node,
  );
}

export default DiscountsGroup;
