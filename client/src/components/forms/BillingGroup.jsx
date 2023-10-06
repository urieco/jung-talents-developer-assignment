import React from 'react';
import FieldGroup from './FieldGroup';
import Field from './Field';

function BillingGroup() {
  const node = (
    <>
      <Field
        title="Phone Number"
        type="text"
        id="billing-phoneNumber"
        placeholderText="1234567890"
        acceptPattern="\d+"
      />
      <Field
        title="Country Code"
        type="text"
        id="billing-countryCode"
        placeholderText="IT"
        acceptPattern="[A-Z]{2,3}"
      />
      <Field
        title="Name"
        type="text"
        id="billing-name"
        placeholderText="John Doe"
      />
      <Field
        title="Post Code"
        type="text"
        id="billing-postcode"
        placeholderText="50056"
        acceptPattern="\d+"
      />
      <Field
        title="Suburb"
        type="text"
        id="billing-suburb"
        placeholderText="Montelupo Fiorentino"
      />
      <Field
        title="Address"
        type="text"
        id="billing-line1"
        placeholderText="Via della Rosa, 58"
      />
    </>
  );
  return React.createElement(
    FieldGroup,
    {
      title: 'Billing Details',
      id: 'billing',
    },
    node,
  );
}

export default BillingGroup;
