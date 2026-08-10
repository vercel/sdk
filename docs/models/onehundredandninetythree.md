# OneHundredAndNinetyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNinetyThree } from "@vercel/sdk/models/one1.js";

let value: OneHundredAndNinetyThree = {
  organizationId: "<id>",
  teamId: "<id>",
  billingPlan: "enterprise",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `organizationId`                               | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `teamId`                                       | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `billingPlan`                                  | [models.BillingPlan](../models/billingplan.md) | :heavy_check_mark:                             | N/A                                            |