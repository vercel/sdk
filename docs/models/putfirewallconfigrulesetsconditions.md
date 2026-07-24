# PutFirewallConfigRulesetsConditions

## Example Usage

```typescript
import { PutFirewallConfigRulesetsConditions } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigRulesetsConditions = {
  type: "geo_country_region",
  op: "neq",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `type`                                                                             | [models.PutFirewallConfigRulesetsType](../models/putfirewallconfigrulesetstype.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `op`                                                                               | [models.PutFirewallConfigRulesetsOp](../models/putfirewallconfigrulesetsop.md)     | :heavy_check_mark:                                                                 | N/A                                                                                |
| `neg`                                                                              | *boolean*                                                                          | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `key`                                                                              | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `value`                                                                            | *models.PutFirewallConfigRulesetsValue*                                            | :heavy_minus_sign:                                                                 | N/A                                                                                |