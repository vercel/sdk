# GetSecurityFirewallConfigRulesConditions

## Example Usage

```typescript
import { GetSecurityFirewallConfigRulesConditions } from "@vercel/sdk/models/getsecurityfirewallconfigrulessecurityresponse200applicationjsonresponsebodydraft2actionaction.js";

let value: GetSecurityFirewallConfigRulesConditions = {
  op: "ninc",
  type: "ja3_digest",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `key`                                                                                        | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `neg`                                                                                        | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `op`                                                                                         | [models.GetSecurityFirewallConfigRulesOp](../models/getsecurityfirewallconfigrulesop.md)     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `type`                                                                                       | [models.GetSecurityFirewallConfigRulesType](../models/getsecurityfirewallconfigrulestype.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `value`                                                                                      | *models.GetSecurityFirewallConfigRulesValue*                                                 | :heavy_minus_sign:                                                                           | N/A                                                                                          |