# ProtectionBypass2

The protection bypass for the alias

## Example Usage

```typescript
import { ProtectionBypass2 } from "@vercel/sdk/models/getaliasop.js";

let value: ProtectionBypass2 = {
  createdAt: 5425.95,
  lastUpdatedAt: 9794.58,
  lastUpdatedBy: "<value>",
  access: "requested",
  scope: "user",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `createdAt`                                                                        | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `lastUpdatedAt`                                                                    | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `lastUpdatedBy`                                                                    | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `access`                                                                           | [models.ProtectionBypassAccess](../models/protectionbypassaccess.md)               | :heavy_check_mark:                                                                 | N/A                                                                                |
| `scope`                                                                            | [models.GetAliasProtectionBypassScope](../models/getaliasprotectionbypassscope.md) | :heavy_check_mark:                                                                 | N/A                                                                                |