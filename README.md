## Assignment:
**Creates an order**:

[x] Prompt the user to enter the fields required to create an order.
  
[x] Call the v2/orders endpoint.
  
[x] Redirect the user to the checkoutURL provided in the response.

## Tech stack
**Frontend**: 
- React
- Tailwindcss
- Vite

**Backend**:
- Node.js
- Expressjs

**Others**:
- Eslint

## Installation and Usage:
**Important**: At root level:
```sh
$ npm install
```

To install both 'client' and 'server' directory:
```sh
$ npm run install-all-deps
```

To run development environment:
```sh
$ npm run dev
```

To run production release:
```sh
$ npm run start
```

**UI Instructions:**
- A simple form with various fields. A group of fields stay in their designated field group (e.g. "Total Amount of order", "Customer's Information"...). Most of the field groups are closed by default. Click on the caret symbol to open the group.
- "Quick Autocompletion For Testing" button to quickly fill out all the rest of the form fields with its acceptable placeholder text.
- Fill out all the 'required' fields, emphasized by the small asterisk by the right side of the field's title. Then, proceed to checkout. 

## Known Issues: 
- API Key provided is no longer working:
https://developers.scalapay.com/reference/post_v2-orders
https://developers.scalapay.com/reference/api-authentication
- As such, to make the API call, you will need to replace the placeholder API key 'Bearer qhtfs87hjnc12kkos' in
"./server/controllers/orderController.js" (line 4)
```sh
sdk.auth('Bearer qhtfs87hjnc12kkos');
```
