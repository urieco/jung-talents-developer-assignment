import React from 'react';
import FieldGroup from './FieldGroup';
import Field from './Field';

function ShippingGroup() {
  const node = (
    <>
      <Field
        title="Phone Number"
        type="text"
        id="shippingPhoneNumber"
        placeholderText="1234567890"
        acceptPattern="\d+"
      />
      <Field
        title="Country Code"
        type="text"
        id="shippingCountryCode"
        placeholderText="IT"
        isRequired
        acceptPattern="[A-Z]{2,3}"
      />
      <Field
        title="Name"
        type="text"
        id="shippingName"
        isRequired
        placeholderText="John Doe"
      />
      <Field
        title="Post Code"
        type="text"
        id="shippingPostcode"
        isRequired
        placeholderText="50056"
        acceptPattern="\d+"
      />
      <Field
        title="Suburb"
        type="text"
        id="shippingSuburb"
        isRequired
        placeholderText="Montelupo Fiorentino"
      />
      <Field
        title="Address"
        type="text"
        id="shippingLine1"
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
