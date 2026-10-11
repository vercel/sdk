# OneHundredAndSeventyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeventyNine } from "@vercel/sdk/models/oldenvvar.js";

let value: OneHundredAndSeventyNine = {
  configChangeCount: 8094.1,
  configChanges: [
    {},
  ],
  configVersion: 5975.39,
  projectId: "<id>",
  restore: false,
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