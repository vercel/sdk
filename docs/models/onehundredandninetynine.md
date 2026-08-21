# OneHundredAndNinetyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNinetyNine } from "@vercel/sdk/models/onehundredandninetysix.js";

let value: OneHundredAndNinetyNine = {
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