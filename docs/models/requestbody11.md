# RequestBody11

Add a custom rule

## Example Usage

```typescript
import { RequestBody11 } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: RequestBody11 = {
  action: "managedRules.update",
  value: {
    name: "<value>",
    active: false,
    conditionGroup: [],
    action: {},
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `action`                                                                                                                             | [models.UpdateFirewallConfigRequestBodySecurityRequest11Action](../models/updatefirewallconfigrequestbodysecurityrequest11action.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `id`                                                                                                                                 | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `value`                                                                                                                              | [models.UpdateFirewallConfigRequestBodySecurityRequest11Value](../models/updatefirewallconfigrequestbodysecurityrequest11value.md)   | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |