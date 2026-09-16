# GetSecurityFirewallConfigRulesSecurityConditions

## Example Usage

```typescript
import { GetSecurityFirewallConfigRulesSecurityConditions } from "@vercel/sdk/models/getsecurityfirewallconfigrulesetssecurityresponse200action.js";

let value: GetSecurityFirewallConfigRulesSecurityConditions = {
  op: "gt",
  type: "bot_status",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `key`                                                                                                        | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `neg`                                                                                                        | *boolean*                                                                                                    | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `op`                                                                                                         | [models.GetSecurityFirewallConfigRulesSecurityOp](../models/getsecurityfirewallconfigrulessecurityop.md)     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `type`                                                                                                       | [models.GetSecurityFirewallConfigRulesSecurityType](../models/getsecurityfirewallconfigrulessecuritytype.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `value`                                                                                                      | *models.GetSecurityFirewallConfigRulesSecurityValue*                                                         | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |