# TwoHundredAndFortyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFortyNine } from "@vercel/sdk/models/payloadprojectids.js";

let value: TwoHundredAndFortyNine = {
  sampleRatePercent: 6350.41,
  spendLimitInDollars: null,
  previous: {
    sampleRatePercent: 1661.49,
    spendLimitInDollars: 5944.78,
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
| `previous`                                                                     | [models.UserEventPayload249Previous](../models/usereventpayload249previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |