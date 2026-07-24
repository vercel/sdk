# UpdateFirewallConfigRequestBody4

Set the action for a consumed ruleset (project scope)

## Example Usage

```typescript
import { UpdateFirewallConfigRequestBody4 } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: UpdateFirewallConfigRequestBody4 = {
  action: "rules.remove",
  id: "<id>",
  value: {
    action: "log",
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                                           | [models.UpdateFirewallConfigRequestBodySecurityRequest4Action](../models/updatefirewallconfigrequestbodysecurityrequest4action.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `id`                                                                                                                               | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `value`                                                                                                                            | [models.UpdateFirewallConfigRequestBodySecurityValue](../models/updatefirewallconfigrequestbodysecurityvalue.md)                   | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |