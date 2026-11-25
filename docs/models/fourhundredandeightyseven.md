# FourHundredAndEightySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEightySeven } from "@vercel/sdk/models/fourhundredandfortyfour.js";

let value: FourHundredAndEightySeven = {
  exportId: "<id>",
  format: "<value>",
  from: 7175.58,
  to: 3183.71,
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