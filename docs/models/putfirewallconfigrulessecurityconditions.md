# PutFirewallConfigRulesSecurityConditions

## Example Usage

```typescript
import { PutFirewallConfigRulesSecurityConditions } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigRulesSecurityConditions = {
  op: "lte",
  type: "raw_path",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `key`                                                                                        | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `neg`                                                                                        | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `op`                                                                                         | [models.PutFirewallConfigRulesSecurityOp](../models/putfirewallconfigrulessecurityop.md)     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `type`                                                                                       | [models.PutFirewallConfigRulesSecurityType](../models/putfirewallconfigrulessecuritytype.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `value`                                                                                      | *models.PutFirewallConfigRulesSecurityValue*                                                 | :heavy_minus_sign:                                                                           | N/A                                                                                          |