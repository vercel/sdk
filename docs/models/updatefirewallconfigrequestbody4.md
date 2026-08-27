# UpdateFirewallConfigRequestBody4

Reorder a ruleset

## Example Usage

```typescript
import { UpdateFirewallConfigRequestBody4 } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: UpdateFirewallConfigRequestBody4 = {
  action: "rules.remove",
  id: "<id>",
  value: "<value>",
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                                           | [models.UpdateFirewallConfigRequestBodySecurityRequest4Action](../models/updatefirewallconfigrequestbodysecurityrequest4action.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `id`                                                                                                                               | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `value`                                                                                                                            | *any*                                                                                                                              | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |