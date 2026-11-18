# FourHundredAndTwentyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwentyFour } from "@vercel/sdk/models/threehundredandseventyfive.js";

let value: FourHundredAndTwentyFour = {
  action: "enable",
  codeReviewEnabled: true,
  cumulativeBalance: "<value>",
  endpoint: "/v1/vade/usage-billing",
  ledgerId: "<id>",
  next: {
    enabled: false,
    maximumOverdraft: "<value>",
  },
  previous: {
    enabled: false,
    maximumOverdraft: "<value>",
  },
  removedTopupIds: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  source: "<value>",
  topupCleanupCompleted: false,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `action`                                                                       | [models.UserEventPayload424Action](../models/usereventpayload424action.md)     | :heavy_check_mark:                                                             | N/A                                                                            |
| `codeReviewEnabled`                                                            | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `codeReviewSelection`                                                          | [models.CodeReviewSelection](../models/codereviewselection.md)                 | :heavy_minus_sign:                                                             | N/A                                                                            |
| `cumulativeBalance`                                                            | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `endpoint`                                                                     | [models.UserEventPayloadEndpoint](../models/usereventpayloadendpoint.md)       | :heavy_check_mark:                                                             | N/A                                                                            |
| `ledgerId`                                                                     | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload424Next](../models/usereventpayload424next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload424Previous](../models/usereventpayload424previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `removedTopupIds`                                                              | *string*[]                                                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `source`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `topupCleanupCompleted`                                                        | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |