# GetSecurityFirewallConfigRulesSecurityConditions

## Example Usage

```typescript
import { GetSecurityFirewallConfigRulesSecurityConditions } from "@vercel/sdk/models/getsecurityfirewallconfiglogheaderssecurityresponse200applicationjsonresponsebodydraftrules2.js";

let value: GetSecurityFirewallConfigRulesSecurityConditions = {
  type: "cookie",
  op: "ex",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                       | [models.GetSecurityFirewallConfigRulesSecurityType](../models/getsecurityfirewallconfigrulessecuritytype.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `op`                                                                                                         | [models.GetSecurityFirewallConfigRulesSecurityOp](../models/getsecurityfirewallconfigrulessecurityop.md)     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `neg`                                                                                                        | *boolean*                                                                                                    | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `key`                                                                                                        | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `value`                                                                                                      | *models.GetSecurityFirewallConfigRulesSecurityValue*                                                         | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |