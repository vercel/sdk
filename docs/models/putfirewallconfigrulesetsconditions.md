# PutFirewallConfigRulesetsConditions

## Example Usage

```typescript
import { PutFirewallConfigRulesetsConditions } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigRulesetsConditions = {
  op: "list",
  type: "method",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `key`                                                                              | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `neg`                                                                              | *boolean*                                                                          | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `op`                                                                               | [models.PutFirewallConfigRulesetsOp](../models/putfirewallconfigrulesetsop.md)     | :heavy_check_mark:                                                                 | N/A                                                                                |
| `type`                                                                             | [models.PutFirewallConfigRulesetsType](../models/putfirewallconfigrulesetstype.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `value`                                                                            | *models.PutFirewallConfigRulesetsValue*                                            | :heavy_minus_sign:                                                                 | N/A                                                                                |