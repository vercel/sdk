# UpdateFirewallConfigRequestBody1

Add a ruleset

## Example Usage

```typescript
import { UpdateFirewallConfigRequestBody1 } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: UpdateFirewallConfigRequestBody1 = {
  action: "firewallEnabled",
  value: {
    name: "<value>",
    active: false,
    conditionGroup: [],
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `action`                                                                                           | [models.UpdateFirewallConfigRequestBodyAction](../models/updatefirewallconfigrequestbodyaction.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `id`                                                                                               | *any*                                                                                              | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `value`                                                                                            | [models.RequestBodyValue](../models/requestbodyvalue.md)                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |