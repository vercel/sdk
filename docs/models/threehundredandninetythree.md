# ThreeHundredAndNinetyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNinetyThree } from "@vercel/sdk/models/principalintegration.js";

let value: ThreeHundredAndNinetyThree = {
  previous: {
    sampleRatePercent: 1638.73,
    spendLimitInDollars: 2035.54,
  },
  sampleRatePercent: 9306.39,
  spendLimitInDollars: 2736.35,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `analyticsId`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload393Previous](../models/usereventpayload393previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `sampleRatePercent`                                                            | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `spendLimitInDollars`                                                          | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |