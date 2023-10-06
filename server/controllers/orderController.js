import api from 'api';

const sdk = api('https://integration.api.scalapay.com/v2/orders');
sdk.auth('Bearer qhtfs87hjnc12kkos');

const orderCreatePost = (req, res) => {
  const d = { ...req.body };
  res.status(200);
  sdk.postV2Orders({
    totalAmount: { currency: d.currency, amount: d.amount },
    consumer: {
      phoneNumber: d.consumerPhoneNumber,
      givenNames: d.consumerGivenNames,
      surname: d.consumerSurname,
      email: d.consumerEmail,
    },
    billing: {
      phoneNumber: d.billingPhoneNumber,
      countryCode: d.billingCountryCode,
      name: d.billingName,
      postcode: d.billingPostcode,
      suburb: d.billingSuburb,
      line1: d.billingLine1,
    },
    shipping: {
      phoneNumber: d.shippingPhoneNumber,
      countryCode: d.shippingCountryCode,
      name: d.shippingName,
      postcode: d.shippingPostcode,
      suburb: d.shippingSuburb,
      line1: d.shippingLine1,
    },
    merchant: {
      redirectCancelUrl: d.redirectCancelUrl,
      redirectConfirmUrl: d.redirectConfirmUrl,
    },
    shippingAmount: { currency: d.shippingAmountCurrency, amount: d.shippingAmount },
    taxAmount: { currency: d.taxAmountCurrency, amount: d.taxAmount },
    type: 'online',
    product: d.installments,
    frequency: { number: 1, frequencyType: 'monthly' },
    orderExpiryMilliseconds: 600000,
    items: [
      {
        price: { currency: d.itemsCurrency, amount: d.itemsAmount },
        quantity: d.itemsQuantity,
        gtin: d.itemsGtin,
        name: d.itemsName,
        category: d.itemsCategory,
        sku: d.itemsSubcategory,
        brand: d.itemsBrand,
        pageUrl: d.itemsPageUrl,
        imageUrl: d.itemsImageUrl,
      },
    ],
    discounts: [{
      amount: {
        currency: d.discountsCurrency,
        amount: d.discountsAmount,
      },
      displayName: d.discountsDisplayName,
    }],
    merchantReference: d.merchantReference,
  })
    .then(({ data }) => res.redirect(data.checkoutUrl))
    .catch(() => res.send('Forbidden: API Key No Longer Works'));
};

// eslint-disable-next-line import/prefer-default-export
export { orderCreatePost };
