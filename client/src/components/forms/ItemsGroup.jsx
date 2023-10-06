import React from 'react';
import FieldGroup from './FieldGroup';
import Field from './Field';

function ItemsGroup() {
  const node = (
    <>
      <Field
        title="Global Trade Item Number"
        type="text"
        id="itemsGtin"
        placeholderText="12358791330"
      />
      <Field
        title="Item's amount"
        type="text"
        id="itemsAmount"
        placeholderText="190.00"
        isRequired
        acceptPattern="^\d+\.\d{2}$"
      />
      <Field
        title="Item's currency"
        type="text"
        id="itemsCurrency"
        placeholderText="EUR"
        isRequired
        acceptPattern="[A-Z]{3}"
      />
      <Field
        title="Quantity"
        type="number"
        id="itemsQuantity"
        placeholderText="1"
        isRequired
      />
      <Field
        title="Product Name"
        type="text"
        id="itemsName"
        placeholderText="T-Shirt"
        isRequired
      />
      <Field
        title="Category"
        type="text"
        id="itemsCategory"
        placeholderText="IT"
        isRequired
        acceptPattern="[A-Z]{2,3}"
      />
      <Field
        title="Subcategories"
        type="text"
        id="itemsSubcategory"
        placeholderText="Shirt"
      />
      <Field
        title="Stock Keeping Unit Code"
        type="text"
        id="itemsSku"
        placeholderText="12341234"
        isRequired
      />
      <Field
        title="Brand"
        type="text"
        id="itemsBrand"
        placeholderText="TopChoice"
      />
      <Field
        title="Page URL"
        type="url"
        id="itemsPageUrl"
        placeholderText="https://www.scalapay.com//product/view/"
      />
      <Field
        title="Image URL"
        type="url"
        id="itemsImageUrl"
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
