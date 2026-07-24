# GetSecurityFirewallConfigRulesConditions

## Example Usage

```typescript
import { GetSecurityFirewallConfigRulesConditions } from "@vercel/sdk/models/getsecurityfirewallconfigapisecurityaction.js";

let value: GetSecurityFirewallConfigRulesConditions = {
  type: "rate_limit_api_id",
  op: "lte",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `type`                                                                                       | [models.GetSecurityFirewallConfigRulesType](../models/getsecurityfirewallconfigrulestype.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `op`                                                                                         | [models.GetSecurityFirewallConfigRulesOp](../models/getsecurityfirewallconfigrulesop.md)     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `neg`                                                                                        | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `key`                                                                                        | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `value`                                                                                      | *models.GetSecurityFirewallConfigRulesValue*                                                 | :heavy_minus_sign:                                                                           | N/A                                                                                          |