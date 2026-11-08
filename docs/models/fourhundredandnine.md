# FourHundredAndNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndNine } from "@vercel/sdk/models/usereventpayload404type.js";

let value: FourHundredAndNine = {
  action: "enable",
  codeReviewEnabled: false,
  cumulativeBalance: "<value>",
  endpoint: "/v1/vade/usage-billing",
  ledgerId: "<id>",
  next: {
    enabled: true,
    maximumOverdraft: "<value>",
  },
  previous: {
    enabled: false,
    maximumOverdraft: "<value>",
  },
  removedTopupIds: [
    "<value 1>",
    "<value 2>",
  ],
  source: "<value>",
  topupCleanupCompleted: true,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `action`                                                                       | [models.UserEventPayload409Action](../models/usereventpayload409action.md)     | :heavy_check_mark:                                                             | N/A                                                                            |
| `codeReviewEnabled`                                                            | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `codeReviewSelection`                                                          | [models.CodeReviewSelection](../models/codereviewselection.md)                 | :heavy_minus_sign:                                                             | N/A                                                                            |
| `cumulativeBalance`                                                            | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `endpoint`                                                                     | [models.UserEventPayloadEndpoint](../models/usereventpayloadendpoint.md)       | :heavy_check_mark:                                                             | N/A                                                                            |
| `ledgerId`                                                                     | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload409Next](../models/usereventpayload409next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload409Previous](../models/usereventpayload409previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `removedTopupIds`                                                              | *string*[]                                                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `source`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `topupCleanupCompleted`                                                        | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |