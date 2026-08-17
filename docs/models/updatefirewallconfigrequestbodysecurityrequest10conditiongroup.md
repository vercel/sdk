# UpdateFirewallConfigRequestBodySecurityRequest10ConditionGroup

## Example Usage

```typescript
import { UpdateFirewallConfigRequestBodySecurityRequest10ConditionGroup } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: UpdateFirewallConfigRequestBodySecurityRequest10ConditionGroup = {
  conditions: [
    {
      type: "method",
      op: "re",
    },
  ],
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `conditions`                                                                                                                                   | [models.UpdateFirewallConfigRequestBodySecurityRequest10Conditions](../models/updatefirewallconfigrequestbodysecurityrequest10conditions.md)[] | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |