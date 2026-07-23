# CreateSecurityFirewallConfigByConfigVersionActivateRulesApiSecurityConditionGroup

## Example Usage

```typescript
import {
  CreateSecurityFirewallConfigByConfigVersionActivateRulesApiSecurityConditionGroup,
} from "@vercel/sdk/models/createsecurityfirewallconfigbyconfigversionactivateop.js";

let value:
  CreateSecurityFirewallConfigByConfigVersionActivateRulesApiSecurityConditionGroup =
    {
      conditions: [
        {
          type: "geo_country_region",
          op: "ninc",
        },
      ],
    };
```

## Fields

| Field                                                                                                                                                                                | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `conditions`                                                                                                                                                                         | [models.CreateSecurityFirewallConfigByConfigVersionActivateRulesApiSecurityConditions](../models/createsecurityfirewallconfigbyconfigversionactivaterulesapisecurityconditions.md)[] | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |