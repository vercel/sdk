# FourHundredAndThirteen

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThirteen } from "@vercel/sdk/models/threehundredandeightytwo.js";

let value: FourHundredAndThirteen = {
  previous: {
    sampleRatePercent: 3762.08,
    spendLimitInDollars: 4524,
  },
  sampleRatePercent: null,
  spendLimitInDollars: 4682.77,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `analyticsId`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload413Previous](../models/usereventpayload413previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `sampleRatePercent`                                                            | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `spendLimitInDollars`                                                          | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |