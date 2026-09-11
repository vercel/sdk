# ThreeHundredAndThirtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirtyEight } from "@vercel/sdk/models/twohundredandseventysix.js";

let value: ThreeHundredAndThirtyEight = {
  sampleRatePercent: 2132.95,
  spendLimitInDollars: 4164.01,
  previous: {
    sampleRatePercent: 8592.74,
    spendLimitInDollars: null,
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
| `previous`                                                                     | [models.UserEventPayload338Previous](../models/usereventpayload338previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |