# TwoHundredAndSixtyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixtyTwo } from "@vercel/sdk/models/usereventpayload195oldenvvartype.js";

let value: TwoHundredAndSixtyTwo = {
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