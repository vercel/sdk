# GetSecurityFirewallConfigRulesConditions

## Example Usage

```typescript
import { GetSecurityFirewallConfigRulesConditions } from "@vercel/sdk/models/getsecurityfirewallconfiglogheaderssecurityresponse200applicationjsonresponsebodydraftrules2.js";

let value: GetSecurityFirewallConfigRulesConditions = {
  type: "raw_path",
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