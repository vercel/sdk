# ProtectionBypass4

The protection bypass for the alias

## Example Usage

```typescript
import { ProtectionBypass4 } from "@vercel/sdk/models/operations/getalias.js";

let value: ProtectionBypass4 = {
  createdAt: 7530.42,
  lastUpdatedAt: 59.39,
  lastUpdatedBy: "<value>",
  scope: "email_invite",
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                                        | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `lastUpdatedAt`                                                                                                                    | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `lastUpdatedBy`                                                                                                                    | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `scope`                                                                                                                            | [operations.GetAliasProtectionBypassAliasesResponseScope](../../models/operations/getaliasprotectionbypassaliasesresponsescope.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |