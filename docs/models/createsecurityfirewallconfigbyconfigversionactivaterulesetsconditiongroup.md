# CreateSecurityFirewallConfigByConfigVersionActivateRulesetsConditionGroup

## Example Usage

```typescript
import { CreateSecurityFirewallConfigByConfigVersionActivateRulesetsConditionGroup } from "@vercel/sdk/models/createsecurityfirewallconfigbyconfigversionactivateop.js";

let value:
  CreateSecurityFirewallConfigByConfigVersionActivateRulesetsConditionGroup = {
    conditions: [
      {
        op: "neq",
        type: "header",
      },
    ],
  };
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `conditions`                                                                                                                                                         | [models.CreateSecurityFirewallConfigByConfigVersionActivateRulesetsConditions](../models/createsecurityfirewallconfigbyconfigversionactivaterulesetsconditions.md)[] | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |