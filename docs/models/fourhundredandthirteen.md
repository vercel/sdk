# FourHundredAndThirteen

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThirteen } from "@vercel/sdk/models/fourhundredandnine.js";

let value: FourHundredAndThirteen = {
  action: "update",
  codeReviewEnabled: true,
  cumulativeBalance: "<value>",
  endpoint: "/v1/vade/usage-billing",
  ledgerId: "<id>",
  next: {
    enabled: false,
    maximumOverdraft: "<value>",
  },
  previous: {
    enabled: true,
    maximumOverdraft: "<value>",
  },
  removedTopupIds: [
    "<value 1>",
  ],
  source: "<value>",
  topupCleanupCompleted: false,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `action`                                                                       | [models.UserEventPayload413Action](../models/usereventpayload413action.md)     | :heavy_check_mark:                                                             | N/A                                                                            |
| `codeReviewEnabled`                                                            | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `codeReviewSelection`                                                          | [models.CodeReviewSelection](../models/codereviewselection.md)                 | :heavy_minus_sign:                                                             | N/A                                                                            |
| `cumulativeBalance`                                                            | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `endpoint`                                                                     | [models.UserEventPayloadEndpoint](../models/usereventpayloadendpoint.md)       | :heavy_check_mark:                                                             | N/A                                                                            |
| `ledgerId`                                                                     | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload413Next](../models/usereventpayload413next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload413Previous](../models/usereventpayload413previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `removedTopupIds`                                                              | *string*[]                                                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `source`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `topupCleanupCompleted`                                                        | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |