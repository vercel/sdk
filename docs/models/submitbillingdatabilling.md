# SubmitBillingDataBilling

Billing data (interim invoicing data).


## Supported Types

### `models.Billing1[]`

```typescript
const value: models.Billing1[] = [
  {
    billingPlanId: "<id>",
    name: "<value>",
    price: "660.65",
    quantity: 7211.98,
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
      price: "480.65",
      quantity: 8115.19,
      units: "<value>",
      total: "<value>",
    },
  ],
};
```

