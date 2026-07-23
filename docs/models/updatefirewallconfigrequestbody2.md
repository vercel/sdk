# UpdateFirewallConfigRequestBody2

Update a ruleset

## Example Usage

```typescript
import { UpdateFirewallConfigRequestBody2 } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: UpdateFirewallConfigRequestBody2 = {
  action: "rules.insert",
  id: "<id>",
  value: {
    name: "<value>",
    active: true,
    conditionGroup: [],
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `action`                                                                                                           | [models.UpdateFirewallConfigRequestBodySecurityAction](../models/updatefirewallconfigrequestbodysecurityaction.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `id`                                                                                                               | *any*                                                                                                              | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `value`                                                                                                            | [models.UpdateFirewallConfigRequestBodyValue](../models/updatefirewallconfigrequestbodyvalue.md)                   | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |