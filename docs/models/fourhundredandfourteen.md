# FourHundredAndFourteen

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFourteen } from "@vercel/sdk/models/threehundredandsixtyone.js";

let value: FourHundredAndFourteen = {
  action: "update",
  codeReviewEnabled: false,
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
  removedTopupIds: [],
  source: "<value>",
  topupCleanupCompleted: false,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `action`                                                                       | [models.UserEventPayload414Action](../models/usereventpayload414action.md)     | :heavy_check_mark:                                                             | N/A                                                                            |
| `codeReviewEnabled`                                                            | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `codeReviewSelection`                                                          | [models.CodeReviewSelection](../models/codereviewselection.md)                 | :heavy_minus_sign:                                                             | N/A                                                                            |
| `cumulativeBalance`                                                            | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `endpoint`                                                                     | [models.UserEventPayloadEndpoint](../models/usereventpayloadendpoint.md)       | :heavy_check_mark:                                                             | N/A                                                                            |
| `ledgerId`                                                                     | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload414Next](../models/usereventpayload414next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload414Previous](../models/usereventpayload414previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `removedTopupIds`                                                              | *string*[]                                                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `source`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `topupCleanupCompleted`                                                        | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |