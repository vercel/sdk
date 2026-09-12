# OneHundredAndSixtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtyOne } from "@vercel/sdk/models/onehundredandfiftyone.js";

let value: OneHundredAndSixtyOne = {
  projectId: "<id>",
  restore: false,
  configVersion: 3352.56,
  configChangeCount: 6329.41,
  configChanges: [],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `projectId`                                                        | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `projectName`                                                      | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `restore`                                                          | *boolean*                                                          | :heavy_check_mark:                                                 | N/A                                                                |
| `configVersion`                                                    | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `configChangeCount`                                                | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `configChanges`                                                    | [models.PayloadConfigChanges](../models/payloadconfigchanges.md)[] | :heavy_check_mark:                                                 | N/A                                                                |