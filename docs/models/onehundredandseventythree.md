# OneHundredAndSeventyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeventyThree } from "@vercel/sdk/models/oldenvvar.js";

let value: OneHundredAndSeventyThree = {
  configChangeCount: 5708.94,
  configChanges: [],
  configVersion: 4767.34,
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