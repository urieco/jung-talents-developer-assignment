import React from 'react';
import FieldGroup from './FieldGroup';
import Field from './Field';

function ShippingGroup() {
  const node = (
    <>
      <Field
        title="Phone Number"
        type="text"
        id="shipping-phoneNumber"
        placeholderText="1234567890"
        acceptPattern="\d+"
      />
      <Field
        title="Country Code"
        type="text"
        id="shipping-countryCode"
        placeholderText="IT"
        isRequired
        acceptPattern="[A-Z]{2,3}"
      />
      <Field
        title="Name"
        type="text"
        id="shipping-name"
        isRequired
        placeholderText="John Doe"
      />
      <Field
        title="Post Code"
        type="text"
        id="shipping-postcode"
        isRequired
        placeholderText="50056"
        acceptPattern="\d+"
      />
      <Field
        title="Suburb"
        type="text"
        id="shipping-suburb"
        isRequired
        placeholderText="Montelupo Fiorentino"
      />
      <Field
        title="Address"
        type="text"
        id="shipping-line1"
        isRequired
        placeholderText="Via della Rosa, 58"
      />
    </>
  );
  return React.createElement(
    FieldGroup,
    {
      title: 'Shipping Details',
      id: 'shipping',
    },
    node,
  );
}

export default ShippingGroup;
