# TwoHundredAndTwenty

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwenty } from "@vercel/sdk/models/payloadmostspecificsubdivision.js";

let value: TwoHundredAndTwenty = {
  sampleRatePercent: 9775.08,
  spendLimitInDollars: 6702.05,
  previous: {
    sampleRatePercent: 9896.18,
    spendLimitInDollars: 5247.25,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `analyticsId`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `sampleRatePercent`                                                            | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `spendLimitInDollars`                                                          | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload220Previous](../models/usereventpayload220previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |