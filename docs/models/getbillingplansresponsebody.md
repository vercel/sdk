# GetBillingPlansResponseBody

## Example Usage

```typescript
import { GetBillingPlansResponseBody } from "@vercel/sdk/models/getbillingplansop.js";

let value: GetBillingPlansResponseBody = {
  plans: [
    {
      type: "subscription",
      description: "amend ultimate riser aboard import",
      id: "<id>",
      name: "<value>",
      scope: "resource",
      paymentMethodRequired: false,
    },
  ],
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `plans`                              | [models.Plans](../models/plans.md)[] | :heavy_check_mark:                   | N/A                                  |