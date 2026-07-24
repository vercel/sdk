# UpdateFirewallConfigRequestBodySecurityConditionGroup

## Example Usage

```typescript
import { UpdateFirewallConfigRequestBodySecurityConditionGroup } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: UpdateFirewallConfigRequestBodySecurityConditionGroup = {
  conditions: [
    {
      type: "geo_country",
      op: "lte",
    },
  ],
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `conditions`                                                                                                                 | [models.UpdateFirewallConfigRequestBodySecurityConditions](../models/updatefirewallconfigrequestbodysecurityconditions.md)[] | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |