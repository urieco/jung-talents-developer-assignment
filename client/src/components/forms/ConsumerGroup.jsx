import React from 'react';
import FieldGroup from './FieldGroup';
import Field from './Field';

function ConsumerGroup() {
  const node = (
    <>
      <Field
        title="Phone Number"
        type="text"
        id="consumerPhoneNumber"
        placeholderText="1234567890"
        acceptPattern="\d+"
      />
      <Field
        title="Given Name"
        type="text"
        id="consumerGivenNames"
        placeholderText="John"
        isRequired
      />
      <Field
        title="Last Name"
        type="text"
        id="consumerSurname"
        placeholderText="Doe"
        isRequired
      />
      <Field
        title="Email"
        type="email"
        id="consumerEmail"
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
