# TwoHundredAndFortyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFortyNine } from "@vercel/sdk/models/factorsorigin.js";

let value: TwoHundredAndFortyNine = {
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