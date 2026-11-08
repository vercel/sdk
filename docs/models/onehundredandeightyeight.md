# OneHundredAndEightyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEightyEight } from "@vercel/sdk/models/payloadinitiator.js";

let value: OneHundredAndEightyEight = {
  configChangeCount: 5850.3,
  configChanges: [
    {},
  ],
  configVersion: 7810.88,
  projectId: "<id>",
  restore: true,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `configChangeCount`                                                | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `configChanges`                                                    | [models.PayloadConfigChanges](../models/payloadconfigchanges.md)[] | :heavy_check_mark:                                                 | N/A                                                                |
| `configVersion`                                                    | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `projectId`                                                        | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `projectName`                                                      | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `restore`                                                          | *boolean*                                                          | :heavy_check_mark:                                                 | N/A                                                                |