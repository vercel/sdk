# ThreeHundredAndFiftyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFiftyFour } from "@vercel/sdk/models/payloadcity.js";

let value: ThreeHundredAndFiftyFour = {
  previous: {
    sampleRatePercent: 6537.71,
    spendLimitInDollars: 180.34,
  },
  sampleRatePercent: 3501.08,
  spendLimitInDollars: 1425.29,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `analyticsId`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload354Previous](../models/usereventpayload354previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `sampleRatePercent`                                                            | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `spendLimitInDollars`                                                          | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |