# GetAliasProtectionBypass2

The protection bypass for the alias

## Example Usage

```typescript
import { GetAliasProtectionBypass2 } from "@vercel/sdk/models/getaliasop.js";

let value: GetAliasProtectionBypass2 = {
  access: "requested",
  createdAt: 7676.73,
  lastUpdatedAt: 336.27,
  lastUpdatedBy: "<value>",
  scope: "user",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `access`                                                             | [models.ProtectionBypassAccess](../models/protectionbypassaccess.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `createdAt`                                                          | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `lastUpdatedAt`                                                      | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `lastUpdatedBy`                                                      | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `scope`                                                              | *"user"*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |