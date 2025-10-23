# PatchEdgeConfigItems12

## Example Usage

```typescript
import { PatchEdgeConfigItems12 } from "@vercel/sdk/models/patchedgeconfigitemsop.js";

let value: PatchEdgeConfigItems12 = {
  operation: "create",
  key: "<key>",
  value: "<value>",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `operation`                                      | [models.OneOperation](../models/oneoperation.md) | :heavy_check_mark:                               | N/A                                              |
| `key`                                            | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `value`                                          | *any*                                            | :heavy_check_mark:                               | N/A                                              |
| `description`                                    | *models.OneDescription*                          | :heavy_minus_sign:                               | N/A                                              |