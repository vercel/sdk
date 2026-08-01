# ThreeHundredAndFourteen

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFourteen } from "@vercel/sdk/models/ssoprotection2.js";

let value: ThreeHundredAndFourteen = {
  sampleRatePercent: 7424.31,
  spendLimitInDollars: 2211.54,
  previous: {
    sampleRatePercent: 578.24,
    spendLimitInDollars: 9411.56,
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
| `previous`                                                                     | [models.UserEventPayload314Previous](../models/usereventpayload314previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |