# GetFirewallConfigRulesetsConditions

## Example Usage

```typescript
import { GetFirewallConfigRulesetsConditions } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: GetFirewallConfigRulesetsConditions = {
  type: "environment",
  op: "pre",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `type`                                                                             | [models.GetFirewallConfigRulesetsType](../models/getfirewallconfigrulesetstype.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `op`                                                                               | [models.GetFirewallConfigRulesetsOp](../models/getfirewallconfigrulesetsop.md)     | :heavy_check_mark:                                                                 | N/A                                                                                |
| `neg`                                                                              | *boolean*                                                                          | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `key`                                                                              | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `value`                                                                            | *models.GetFirewallConfigRulesetsValue*                                            | :heavy_minus_sign:                                                                 | N/A                                                                                |