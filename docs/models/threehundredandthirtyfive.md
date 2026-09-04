# ThreeHundredAndThirtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirtyFive } from "@vercel/sdk/models/twohundredandseventythree.js";

let value: ThreeHundredAndThirtyFive = {
  sampleRatePercent: 9645.46,
  spendLimitInDollars: 8374.95,
  previous: {
    sampleRatePercent: 7109.93,
    spendLimitInDollars: 6682.56,
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
| `previous`                                                                     | [models.UserEventPayload335Previous](../models/usereventpayload335previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |