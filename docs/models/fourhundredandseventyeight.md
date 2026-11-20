# FourHundredAndSeventyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSeventyEight } from "@vercel/sdk/models/fourhundredandthirtyfive.js";

let value: FourHundredAndSeventyEight = {
  exportId: "<id>",
  format: "<value>",
  from: 5758.54,
  to: 9380.44,
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `exportId`                             | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `filters`                              | [models.Filters](../models/filters.md) | :heavy_minus_sign:                     | N/A                                    |
| `format`                               | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `from`                                 | *number*                               | :heavy_check_mark:                     | N/A                                    |
| `to`                                   | *number*                               | :heavy_check_mark:                     | N/A                                    |