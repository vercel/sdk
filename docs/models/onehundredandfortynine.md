# OneHundredAndFortyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFortyNine } from "@vercel/sdk/models/datacacheread.js";

let value: OneHundredAndFortyNine = {
  ownerId: "<id>",
  source: "<value>",
  cause: "<value>",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `ownerId`                                  | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `source`                                   | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `cause`                                    | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `blockReason`                              | *string*                                   | :heavy_minus_sign:                         | N/A                                        |
| `siftRoute`                                | [models.SiftRoute](../models/siftroute.md) | :heavy_minus_sign:                         | N/A                                        |