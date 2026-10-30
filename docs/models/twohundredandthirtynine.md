# TwoHundredAndThirtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirtyNine } from "@vercel/sdk/models/newowner.js";

let value: TwoHundredAndThirtyNine = {
  billingPlan: "enterprise",
  organizationId: "<id>",
  teamId: "<id>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `billingPlan`                                                | [models.PayloadBillingPlan](../models/payloadbillingplan.md) | :heavy_check_mark:                                           | N/A                                                          |
| `organizationId`                                             | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `teamId`                                                     | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |