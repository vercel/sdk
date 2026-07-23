# GetSecurityFirewallConfigRulesetsApiSecurityConditions

## Example Usage

```typescript
import { GetSecurityFirewallConfigRulesetsApiSecurityConditions } from "@vercel/sdk/models/getsecurityfirewallconfigresponsebody.js";

let value: GetSecurityFirewallConfigRulesetsApiSecurityConditions = {
  type: "method",
  op: "gte",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                   | [models.GetSecurityFirewallConfigRulesetsApiSecurityType](../models/getsecurityfirewallconfigrulesetsapisecuritytype.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `op`                                                                                                                     | [models.GetSecurityFirewallConfigRulesetsApiSecurityOp](../models/getsecurityfirewallconfigrulesetsapisecurityop.md)     | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `neg`                                                                                                                    | *boolean*                                                                                                                | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `key`                                                                                                                    | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `value`                                                                                                                  | *models.GetSecurityFirewallConfigRulesetsApiSecurityValue*                                                               | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |