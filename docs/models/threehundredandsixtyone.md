# ThreeHundredAndSixtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSixtyOne } from "@vercel/sdk/models/threehundredandfiftynine.js";

let value: ThreeHundredAndSixtyOne = {
  previous: {
    sampleRatePercent: 3419.62,
    spendLimitInDollars: 8514.55,
  },
  sampleRatePercent: 3385.9,
  spendLimitInDollars: 8877.05,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `analyticsId`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload361Previous](../models/usereventpayload361previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `sampleRatePercent`                                                            | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `spendLimitInDollars`                                                          | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |