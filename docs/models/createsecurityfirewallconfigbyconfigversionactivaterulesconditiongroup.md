# CreateSecurityFirewallConfigByConfigVersionActivateRulesConditionGroup

## Example Usage

```typescript
import { CreateSecurityFirewallConfigByConfigVersionActivateRulesConditionGroup } from "@vercel/sdk/models/createsecurityfirewallconfigbyconfigversionactivateop.js";

let value:
  CreateSecurityFirewallConfigByConfigVersionActivateRulesConditionGroup = {
    conditions: [
      {
        op: "lte",
        type: "domain_environment",
      },
    ],
  };
```

## Fields

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `conditions`                                                                                                                                                   | [models.CreateSecurityFirewallConfigByConfigVersionActivateRulesConditions](../models/createsecurityfirewallconfigbyconfigversionactivaterulesconditions.md)[] | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |