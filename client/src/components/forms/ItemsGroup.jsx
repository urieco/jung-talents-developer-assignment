import React from 'react';
import FieldGroup from './FieldGroup';
import Field from './Field';

function ItemsGroup() {
  const node = (
    <>
      <Field
        title="Global Trade Item Number"
        type="text"
        id="items-gtin"
        placeholderText="12358791330"
      />
      <Field
        title="Quantity"
        type="number"
        id="items-quantity"
        placeholderText="1"
        isRequired
      />
      <Field
        title="Product Name"
        type="text"
        id="items-name"
        placeholderText="T-Shirt"
        isRequired
      />
      <Field
        title="Category"
        type="text"
        id="items-category"
        placeholderText="IT"
        isRequired
        acceptPattern="[A-Z]{2,3}"
      />
      <Field
        title="Subcategories"
        type="text"
        id="items-subcategory"
        placeholderText="Shirt"
      />
      <Field
        title="Stock Keeping Unit Code"
        type="text"
        id="items-sku"
        placeholderText="12341234"
        isRequired
      />
      <Field
        title="Brand"
        type="text"
        id="items-branc"
        placeholderText="TopChoice"
      />
      <Field
        title="Page URL"
        type="url"
        id="items-pageUrl"
        placeholderText="https://www.scalapay.com//product/view/"
      />
      <Field
        title="Image URL"
        type="url"
        id="items-imageURL"
        placeholderText="https://www.scalapay.com//product/view/"
      />
    </>
  );
  return React.createElement(
    FieldGroup,
    {
      title: 'Items',
      id: 'items',
    },
    node,
  );
}

export default ItemsGroup;
