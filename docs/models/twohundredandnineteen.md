# TwoHundredAndNineteen

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNineteen } from "@vercel/sdk/models/usereventfactors1.js";

let value: TwoHundredAndNineteen = {
  sampleRatePercent: 3673.94,
  spendLimitInDollars: 4753.34,
  previous: {
    sampleRatePercent: 9899.26,
    spendLimitInDollars: 3827.11,
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
| `previous`                                                                     | [models.UserEventPayload219Previous](../models/usereventpayload219previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |