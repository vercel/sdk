# RequestBody11

Update a managed ruleset

## Example Usage

```typescript
import { RequestBody11 } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: RequestBody11 = {
  action: "managedRules.update",
  id: "<id>",
  value: {
    active: false,
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `action`                                                                                                                             | [models.UpdateFirewallConfigRequestBodySecurityRequest11Action](../models/updatefirewallconfigrequestbodysecurityrequest11action.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `id`                                                                                                                                 | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `value`                                                                                                                              | [models.UpdateFirewallConfigRequestBodySecurityRequest11Value](../models/updatefirewallconfigrequestbodysecurityrequest11value.md)   | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |