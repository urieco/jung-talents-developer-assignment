import React from 'react';

function ScalapayWidget() {
  return (
    <>
      <div id="price-container">€ 190.00</div>
      <scalapay-widget
        type="checkout"
        show-title="true"
        frequency-number="30"
        number-of-installments="3"
        hide="false"
        hide-price="false"
        min="5"
        max="1500"
        amount-selectors='["#price-container"]'
        currency-position="before"
        currency-display="symbol"
        logo-size="100"
        theme="primary"
        locale="en"
      />
    </>
  );
}

export default ScalapayWidget;
