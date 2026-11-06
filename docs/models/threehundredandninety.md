# ThreeHundredAndNinety

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNinety } from "@vercel/sdk/models/consent.js";

let value: ThreeHundredAndNinety = {
  previous: {
    sampleRatePercent: 9971.48,
    spendLimitInDollars: 7806.57,
  },
  sampleRatePercent: 3919.31,
  spendLimitInDollars: 6451.62,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `analyticsId`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload390Previous](../models/usereventpayload390previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `sampleRatePercent`                                                            | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `spendLimitInDollars`                                                          | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |