# ListAliasesProtectionBypass2

The protection bypass for the alias

## Example Usage

```typescript
import { ListAliasesProtectionBypass2 } from "@vercel/sdk/models/listaliasesop.js";

let value: ListAliasesProtectionBypass2 = {
  createdAt: 8173.52,
  lastUpdatedAt: 7685.46,
  lastUpdatedBy: "<value>",
  access: "requested",
  scope: "user",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `createdAt`                                                                                            | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `lastUpdatedAt`                                                                                        | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `lastUpdatedBy`                                                                                        | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `access`                                                                                               | [models.ProtectionBypassAccess](../models/protectionbypassaccess.md)                                   | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `scope`                                                                                                | [models.ListAliasesProtectionBypassAliasesScope](../models/listaliasesprotectionbypassaliasesscope.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |