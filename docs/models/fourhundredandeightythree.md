# FourHundredAndEightyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEightyThree } from "@vercel/sdk/models/fourhundredandforty.js";

let value: FourHundredAndEightyThree = {
  exportId: "<id>",
  format: "<value>",
  from: 4452.14,
  to: 2025.64,
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