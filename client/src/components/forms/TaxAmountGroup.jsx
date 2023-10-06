import React from 'react';
import FieldGroup from './FieldGroup';
import Field from './Field';

function TaxAmountGroup() {
  const node = (
    <>
      <Field
        title="Tax Amount"
        type="text"
        id="taxAmount"
        placeholderText="3.70"
        acceptPattern="^\d+\.\d{2}$"
      />
      <Field
        title="Tax Amount Currency"
        type="text"
        id="taxAmountCurrency"
        placeholderText="EUR"
        acceptPattern="[A-Z]{3}"
      />
    </>
  );
  return React.createElement(
    FieldGroup,
    {
      title: 'Total Tax Amount',
      id: 'totalTaxAmount',
    },
    node,
  );
}

export default TaxAmountGroup;
