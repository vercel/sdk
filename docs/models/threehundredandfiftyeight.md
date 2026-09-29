# ThreeHundredAndFiftyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFiftyEight } from "@vercel/sdk/models/usereventpayload354geolocationnames.js";

let value: ThreeHundredAndFiftyEight = {
  previous: {
    sampleRatePercent: 9659.21,
    spendLimitInDollars: 8120.75,
  },
  sampleRatePercent: 4651.87,
  spendLimitInDollars: 9504.57,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `analyticsId`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload358Previous](../models/usereventpayload358previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `sampleRatePercent`                                                            | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `spendLimitInDollars`                                                          | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |