# ThreeHundredAndSixtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSixtyEight } from "@vercel/sdk/models/threehundredandsixtysix.js";

let value: ThreeHundredAndSixtyEight = {
  previous: {
    sampleRatePercent: 4846.84,
    spendLimitInDollars: 8442.75,
  },
  sampleRatePercent: 1007.33,
  spendLimitInDollars: null,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `analyticsId`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload368Previous](../models/usereventpayload368previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `sampleRatePercent`                                                            | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `spendLimitInDollars`                                                          | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |