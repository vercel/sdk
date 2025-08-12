# GetAliasProtectionBypass2

The protection bypass for the alias

## Example Usage

```typescript
import { GetAliasProtectionBypass2 } from "@vercel/sdk/models/getaliasop.js";

let value: GetAliasProtectionBypass2 = {
  createdAt: 7811.81,
  lastUpdatedAt: 7676.73,
  lastUpdatedBy: "<value>",
  access: "requested",
  scope: "user",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `createdAt`                                                                                      | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `lastUpdatedAt`                                                                                  | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `lastUpdatedBy`                                                                                  | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `access`                                                                                         | [models.ProtectionBypassAccess](../models/protectionbypassaccess.md)                             | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `scope`                                                                                          | [models.GetAliasProtectionBypassAliasesScope](../models/getaliasprotectionbypassaliasesscope.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |