# FourHundredAndThirty

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThirty } from "@vercel/sdk/models/payloadstaticips.js";

let value: FourHundredAndThirty = {
  action: "update",
  codeReviewEnabled: false,
  cumulativeBalance: "<value>",
  endpoint: "/v1/vade/usage-billing",
  ledgerId: "<id>",
  next: {
    enabled: true,
    maximumOverdraft: null,
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
| `action`                                                                       | [models.UserEventPayload430Action](../models/usereventpayload430action.md)     | :heavy_check_mark:                                                             | N/A                                                                            |
| `codeReviewEnabled`                                                            | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `codeReviewSelection`                                                          | [models.CodeReviewSelection](../models/codereviewselection.md)                 | :heavy_minus_sign:                                                             | N/A                                                                            |
| `cumulativeBalance`                                                            | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `endpoint`                                                                     | [models.UserEventPayloadEndpoint](../models/usereventpayloadendpoint.md)       | :heavy_check_mark:                                                             | N/A                                                                            |
| `ledgerId`                                                                     | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload430Next](../models/usereventpayload430next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload430Previous](../models/usereventpayload430previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `removedTopupIds`                                                              | *string*[]                                                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `source`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `topupCleanupCompleted`                                                        | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |