# CreateSecurityFirewallConfigByConfigVersionActivateRulesetsConditionGroup

## Example Usage

```typescript
import { CreateSecurityFirewallConfigByConfigVersionActivateRulesetsConditionGroup } from "@vercel/sdk/models/createsecurityfirewallconfigbyconfigversionactivateop.js";

let value:
  CreateSecurityFirewallConfigByConfigVersionActivateRulesetsConditionGroup = {
    conditions: [
      {
        type: "path",
        op: "list",
      },
    ],
  };
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `conditions`                                                                                                                                                         | [models.CreateSecurityFirewallConfigByConfigVersionActivateRulesetsConditions](../models/createsecurityfirewallconfigbyconfigversionactivaterulesetsconditions.md)[] | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |