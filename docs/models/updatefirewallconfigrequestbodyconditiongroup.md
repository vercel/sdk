# UpdateFirewallConfigRequestBodyConditionGroup

## Example Usage

```typescript
import { UpdateFirewallConfigRequestBodyConditionGroup } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: UpdateFirewallConfigRequestBodyConditionGroup = {
  conditions: [
    {
      type: "user_agent",
      op: "suf",
    },
  ],
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `conditions`                                                                                                 | [models.UpdateFirewallConfigRequestBodyConditions](../models/updatefirewallconfigrequestbodyconditions.md)[] | :heavy_check_mark:                                                                                           | N/A                                                                                                          |