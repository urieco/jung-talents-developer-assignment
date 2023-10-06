import React from 'react';
import FieldGroup from './FieldGroup';
import Field from './Field';

function MerchantGroup() {
  const node = (
    <>
      <Field
        title="Cancel URL"
        type="url"
        id="redirectCancelURL"
        placeholderText="https://portal.integration.scalapay.com/failure-url"
        isRequired
      />
      <Field
        title="Confirm URL"
        type="url"
        id="redirectConfirmURL"
        placeholderText="https://portal.integration.scalapay.com/success-url"
        isRequired
      />
    </>
  );
  return React.createElement(
    FieldGroup,
    {
      title: 'Merchant',
      id: 'merchant',
    },
    node,
  );
}

export default MerchantGroup;
