# UpdateFirewallConfigRequestBodySecurityRequestConditionGroup

## Example Usage

```typescript
import { UpdateFirewallConfigRequestBodySecurityRequestConditionGroup } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: UpdateFirewallConfigRequestBodySecurityRequestConditionGroup = {
  conditions: [
    {
      type: "protocol",
      op: "ninc",
    },
  ],
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `conditions`                                                                                                                               | [models.UpdateFirewallConfigRequestBodySecurityRequestConditions](../models/updatefirewallconfigrequestbodysecurityrequestconditions.md)[] | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |