# TwoHundredAndThirtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirtyEight } from "@vercel/sdk/models/twohundredandsix.js";

let value: TwoHundredAndThirtyEight = {
  billingPlan: "platform",
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