# CreateSecurityFirewallConfigByConfigVersionActivateRulesConditionGroup

## Example Usage

```typescript
import { CreateSecurityFirewallConfigByConfigVersionActivateRulesConditionGroup } from "@vercel/sdk/models/createsecurityfirewallconfigbyconfigversionactivateop.js";

let value:
  CreateSecurityFirewallConfigByConfigVersionActivateRulesConditionGroup = {
    conditions: [
      {
        type: "ja4_digest",
        op: "gt",
      },
    ],
  };
```

## Fields

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `conditions`                                                                                                                                                   | [models.CreateSecurityFirewallConfigByConfigVersionActivateRulesConditions](../models/createsecurityfirewallconfigbyconfigversionactivaterulesconditions.md)[] | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |