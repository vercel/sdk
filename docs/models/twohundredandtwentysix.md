# TwoHundredAndTwentySix

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentySix } from "@vercel/sdk/models/usereventpayload163previous.js";

let value: TwoHundredAndTwentySix = {
  sampleRatePercent: 525.59,
  spendLimitInDollars: 4827.6,
  previous: {
    sampleRatePercent: 9749.42,
    spendLimitInDollars: 2140.95,
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
| `previous`                                                                     | [models.UserEventPayload226Previous](../models/usereventpayload226previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |