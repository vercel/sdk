# FourHundredAndEightyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEightyEight } from "@vercel/sdk/models/fourhundredandfortyfive.js";

let value: FourHundredAndEightyEight = {
  exportId: "<id>",
  format: "<value>",
  from: 7109.4,
  to: 2125.62,
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