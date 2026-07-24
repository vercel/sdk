# RequestBody11

Enable a managed rule

## Example Usage

```typescript
import { RequestBody11 } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: RequestBody11 = {
  action: "managedRules.update",
  id: "sf",
  value: {
    active: true,
    action: "deny",
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `action`                                                                                                                             | [models.UpdateFirewallConfigRequestBodySecurityRequest11Action](../models/updatefirewallconfigrequestbodysecurityrequest11action.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `id`                                                                                                                                 | [models.Id](../models/id.md)                                                                                                         | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `value`                                                                                                                              | [models.UpdateFirewallConfigRequestBodySecurityRequest11Value](../models/updatefirewallconfigrequestbodysecurityrequest11value.md)   | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |