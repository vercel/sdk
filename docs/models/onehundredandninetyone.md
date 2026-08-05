# OneHundredAndNinetyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNinetyOne } from "@vercel/sdk/models/onehundredandseventyone.js";

let value: OneHundredAndNinetyOne = {
  organizationId: "<id>",
  teamId: "<id>",
  billingPlan: "platform",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `organizationId`                               | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `teamId`                                       | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `billingPlan`                                  | [models.BillingPlan](../models/billingplan.md) | :heavy_check_mark:                             | N/A                                            |