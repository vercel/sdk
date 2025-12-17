# PutFirewallConfigRulesSecurityConditions

## Example Usage

```typescript
import { PutFirewallConfigRulesSecurityConditions } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigRulesSecurityConditions = {
  type: "scheme",
  op: "lt",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `type`                                                                                       | [models.PutFirewallConfigRulesSecurityType](../models/putfirewallconfigrulessecuritytype.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `op`                                                                                         | [models.PutFirewallConfigRulesSecurityOp](../models/putfirewallconfigrulessecurityop.md)     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `neg`                                                                                        | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `key`                                                                                        | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `value`                                                                                      | *models.PutFirewallConfigRulesSecurityValue*                                                 | :heavy_minus_sign:                                                                           | N/A                                                                                          |