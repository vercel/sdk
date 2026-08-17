# GetSecurityFirewallConfigRulesSecurityResponseConditions

## Example Usage

```typescript
import { GetSecurityFirewallConfigRulesSecurityResponseConditions } from "@vercel/sdk/models/getsecurityfirewallconfiglogheaderssecurityresponse200applicationjsonresponsebodydraftrules2.js";

let value: GetSecurityFirewallConfigRulesSecurityResponseConditions = {
  type: "target_path",
  op: "lte",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                       | [models.GetSecurityFirewallConfigRulesSecurityResponseType](../models/getsecurityfirewallconfigrulessecurityresponsetype.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `op`                                                                                                                         | [models.GetSecurityFirewallConfigRulesSecurityResponseOp](../models/getsecurityfirewallconfigrulessecurityresponseop.md)     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `neg`                                                                                                                        | *boolean*                                                                                                                    | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `key`                                                                                                                        | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `value`                                                                                                                      | *models.GetSecurityFirewallConfigRulesSecurityResponseValue*                                                                 | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |