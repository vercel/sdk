# OneHundredAndNinetyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNinetyEight } from "@vercel/sdk/models/usereventpayloadlasteditedbyprincipal.js";

let value: OneHundredAndNinetyEight = {
  configChangeCount: 1920.87,
  configChanges: [],
  configVersion: 4924.82,
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