# GetBillingPlansResponseBody

## Example Usage

```typescript
import { GetBillingPlansResponseBody } from "@vercel/sdk/models/getbillingplansop.js";

let value: GetBillingPlansResponseBody = {
  plans: [
    {
      description: "dependable rue physically divert pish afore digital qua",
      id: "<id>",
      name: "<value>",
      paymentMethodRequired: true,
      scope: "resource",
      type: "subscription",
    },
  ],
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `plans`                              | [models.Plans](../models/plans.md)[] | :heavy_check_mark:                   | N/A                                  |