# TwoHundredAndFortyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFortyNine } from "@vercel/sdk/models/factors1.js";

let value: TwoHundredAndFortyNine = {
  cause: "<value>",
  ownerId: "<id>",
  source: "<value>",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `blockReason`                              | *string*                                   | :heavy_minus_sign:                         | N/A                                        |
| `cause`                                    | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `ownerId`                                  | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `siftRoute`                                | [models.SiftRoute](../models/siftroute.md) | :heavy_minus_sign:                         | N/A                                        |
| `source`                                   | *string*                                   | :heavy_check_mark:                         | N/A                                        |