# UpdateFirewallConfigRequestBody7

Set the action for a consumed ruleset (project scope)

## Example Usage

```typescript
import { UpdateFirewallConfigRequestBody7 } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: UpdateFirewallConfigRequestBody7 = {
  action: "crs.disable",
  id: null,
  value: {
    action: "deny",
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                                           | [models.UpdateFirewallConfigRequestBodySecurityRequest7Action](../models/updatefirewallconfigrequestbodysecurityrequest7action.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `id`                                                                                                                               | *any*                                                                                                                              | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `value`                                                                                                                            | [models.UpdateFirewallConfigRequestBodySecurityRequest7Value](../models/updatefirewallconfigrequestbodysecurityrequest7value.md)   | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |