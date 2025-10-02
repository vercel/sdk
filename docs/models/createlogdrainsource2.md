# CreateLogDrainSource2

## Example Usage

```typescript
import { CreateLogDrainSource2 } from "@vercel/sdk/models/createlogdrainop.js";

let value: CreateLogDrainSource2 = {
  kind: "integration",
  integrationId: "<id>",
  integrationConfigurationId: "<id>",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `kind`                                                                                     | [models.CreateLogDrainSourceLogDrainsKind](../models/createlogdrainsourcelogdrainskind.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `resourceId`                                                                               | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `externalResourceId`                                                                       | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `integrationId`                                                                            | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `integrationConfigurationId`                                                               | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |