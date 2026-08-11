# ThreeHundredAndTwentyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwentyFour } from "@vercel/sdk/models/addedprojects.js";

let value: ThreeHundredAndTwentyFour = {
  sampleRatePercent: 840.75,
  spendLimitInDollars: 8148.74,
  previous: {
    sampleRatePercent: 6119.06,
    spendLimitInDollars: 2715.61,
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
| `previous`                                                                     | [models.UserEventPayload324Previous](../models/usereventpayload324previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |