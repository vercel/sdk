# TwoHundredAndFiftyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFiftyThree } from "@vercel/sdk/models/twohundredandtwentythree.js";

let value: TwoHundredAndFiftyThree = {
  sampleRatePercent: 9226.36,
  spendLimitInDollars: null,
  previous: {
    sampleRatePercent: 398.01,
    spendLimitInDollars: 2705.9,
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
| `previous`                                                                     | [models.UserEventPayload253Previous](../models/usereventpayload253previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |