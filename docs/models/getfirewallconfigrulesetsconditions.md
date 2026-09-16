# GetFirewallConfigRulesetsConditions

## Example Usage

```typescript
import { GetFirewallConfigRulesetsConditions } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: GetFirewallConfigRulesetsConditions = {
  op: "gte",
  type: "scheme",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `key`                                                                              | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `neg`                                                                              | *boolean*                                                                          | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `op`                                                                               | [models.GetFirewallConfigRulesetsOp](../models/getfirewallconfigrulesetsop.md)     | :heavy_check_mark:                                                                 | N/A                                                                                |
| `type`                                                                             | [models.GetFirewallConfigRulesetsType](../models/getfirewallconfigrulesetstype.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `value`                                                                            | *models.GetFirewallConfigRulesetsValue*                                            | :heavy_minus_sign:                                                                 | N/A                                                                                |