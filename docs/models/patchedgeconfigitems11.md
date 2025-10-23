# PatchEdgeConfigItems11

## Example Usage

```typescript
import { PatchEdgeConfigItems11 } from "@vercel/sdk/models/patchedgeconfigitemsop.js";

let value: PatchEdgeConfigItems11 = {
  operation: "delete",
  key: "<key>",
  value: "<value>",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `operation`                                | [models.Operation](../models/operation.md) | :heavy_check_mark:                         | N/A                                        |
| `key`                                      | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `value`                                    | *any*                                      | :heavy_check_mark:                         | N/A                                        |
| `description`                              | *models.Description*                       | :heavy_minus_sign:                         | N/A                                        |