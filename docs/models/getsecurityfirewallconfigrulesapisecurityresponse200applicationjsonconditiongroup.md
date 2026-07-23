# GetSecurityFirewallConfigRulesApiSecurityResponse200ApplicationJSONConditionGroup

## Example Usage

```typescript
import {
  GetSecurityFirewallConfigRulesApiSecurityResponse200ApplicationJSONConditionGroup,
} from "@vercel/sdk/models/getsecurityfirewallconfigapisecurityaction.js";

let value:
  GetSecurityFirewallConfigRulesApiSecurityResponse200ApplicationJSONConditionGroup =
    {
      conditions: [
        {
          type: "region",
          op: "lte",
        },
      ],
    };
```

## Fields

| Field                                                                                                                                                                                                        | Type                                                                                                                                                                                                         | Required                                                                                                                                                                                                     | Description                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `conditions`                                                                                                                                                                                                 | [models.GetSecurityFirewallConfigRulesApiSecurityResponse200ApplicationJSONResponseBodyConditions](../models/getsecurityfirewallconfigrulesapisecurityresponse200applicationjsonresponsebodyconditions.md)[] | :heavy_check_mark:                                                                                                                                                                                           | N/A                                                                                                                                                                                                          |