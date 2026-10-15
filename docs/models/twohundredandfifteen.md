# TwoHundredAndFifteen

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFifteen } from "@vercel/sdk/models/usereventpayload174type.js";

let value: TwoHundredAndFifteen = {
  periods: [
    {
      endDate: "<value>",
      percent: "<value>",
      periodNumber: 4098.45,
      startDate: "<value>",
    },
  ],
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `periods`                                | [models.Periods](../models/periods.md)[] | :heavy_check_mark:                       | N/A                                      |