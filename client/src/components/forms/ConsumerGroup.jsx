import React from 'react';
import FieldGroup from './FieldGroup';
import Field from './Field';

function ConsumerGroup() {
  const node = (
    <>
      <Field
        title="Phone Number"
        type="text"
        id="consumer-phoneNumber"
        placeholderText="1234567890"
        acceptPattern="\d+"
      />
      <Field
        title="Given Name"
        type="text"
        id="consumer-givenNames"
        placeholderText="John"
        isRequired
      />
      <Field
        title="Last Name"
        type="text"
        id="consumer-surname"
        placeholderText="Doe"
        isRequired
      />
      <Field
        title="Email"
        type="email"
        id="consumer-email"
        placeholderText="john.doe@scalapay.com"
      />
    </>
  );
  return React.createElement(
    FieldGroup,
    {
      title: 'Customer\'s Information',
      id: 'consumer',
    },
    node,
  );
}

export default ConsumerGroup;
