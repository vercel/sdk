# Balances

A credit balance for a particular token type

## Example Usage

```typescript
import { Balances } from "@vercel/sdk/models/submitprepaymentbalancesop.js";

let value: Balances = {
  currencyValueInCents: 2107.1,
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `resourceId`                                                                                                                  | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | Partner's resource ID, exclude if credits are tied to the installation and not an individual resource.                        |
| `credit`                                                                                                                      | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | A human-readable description of the credits the user currently has, e.g. \"2,000 Tokens\"                                     |
| `nameLabel`                                                                                                                   | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | The name of the credits, for display purposes, e.g. \"Tokens\"                                                                |
| `currencyValueInCents`                                                                                                        | *number*                                                                                                                      | :heavy_check_mark:                                                                                                            | The dollar value of the credit balance, in USD and provided in cents, which is used to trigger automatic purchase thresholds. |