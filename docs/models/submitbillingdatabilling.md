# SubmitBillingDataBilling

Billing data (interim invoicing data).


## Supported Types

### `models.Billing1[]`

```typescript
const value: models.Billing1[] = [
  {
    billingPlanId: "<id>",
    name: "<value>",
    price: "892.65",
    quantity: 5220.92,
    units: "<value>",
    total: "<value>",
  },
];
```

### `models.Billing2`

```typescript
const value: models.Billing2 = {
  items: [
    {
      billingPlanId: "<id>",
      name: "<value>",
      price: "362.69",
      quantity: 5186.35,
      units: "<value>",
      total: "<value>",
    },
  ],
};
```

