# ThreeHundredAndFiftySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFiftySeven } from "@vercel/sdk/models/usereventpayload353geolocationnames.js";

let value: ThreeHundredAndFiftySeven = {
  previous: {
    sampleRatePercent: 8963.65,
    spendLimitInDollars: 9750.37,
  },
  sampleRatePercent: 9641.19,
  spendLimitInDollars: 6576.22,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `analyticsId`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload357Previous](../models/usereventpayload357previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `sampleRatePercent`                                                            | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `spendLimitInDollars`                                                          | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |