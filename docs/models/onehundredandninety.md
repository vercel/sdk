# OneHundredAndNinety

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNinety } from "@vercel/sdk/models/bandwidth.js";

let value: OneHundredAndNinety = {
  periods: [
    {
      periodNumber: 4098.45,
      percent: "<value>",
      startDate: "<value>",
      endDate: "<value>",
    },
  ],
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `periods`                                | [models.Periods](../models/periods.md)[] | :heavy_check_mark:                       | N/A                                      |