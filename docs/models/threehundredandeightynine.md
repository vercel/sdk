# ThreeHundredAndEightyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEightyNine } from "@vercel/sdk/models/consent.js";

let value: ThreeHundredAndEightyNine = {
  previous: {
    sampleRatePercent: 4751.36,
    spendLimitInDollars: null,
  },
  sampleRatePercent: 5332.78,
  spendLimitInDollars: null,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `analyticsId`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload389Previous](../models/usereventpayload389previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `sampleRatePercent`                                                            | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `spendLimitInDollars`                                                          | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |