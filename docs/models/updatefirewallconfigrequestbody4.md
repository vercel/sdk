# UpdateFirewallConfigRequestBody4

Remove a custom rule

## Example Usage

```typescript
import { UpdateFirewallConfigRequestBody4 } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: UpdateFirewallConfigRequestBody4 = {
  action: "rules.remove",
  id: "<id>",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                                         | [models.UpdateFirewallConfigRequestBodySecurityRequestAction](../models/updatefirewallconfigrequestbodysecurityrequestaction.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `id`                                                                                                                             | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `value`                                                                                                                          | *any*                                                                                                                            | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |