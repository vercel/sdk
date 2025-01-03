# SubmitBillingDataBilling

Billing data (interim invoicing data).


## Supported Types

### `models.Billing1[]`

```typescript
const value: models.Billing1[] = [
  {
    billingPlanId: "<id>",
    name: "<value>",
    price: "784.27",
    quantity: 8748.42,
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
      price: "556.19",
      quantity: 3136.95,
      units: "<value>",
      total: "<value>",
    },
  ],
};
```

