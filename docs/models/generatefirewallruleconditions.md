# GenerateFirewallRuleConditions

## Example Usage

```typescript
import { GenerateFirewallRuleConditions } from "@vercel/sdk/models/generatefirewallruleop.js";

let value: GenerateFirewallRuleConditions = {
  neg: true,
  op: "<value>",
  type: "<value>",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `key`                              | *string*                           | :heavy_minus_sign:                 | N/A                                |
| `neg`                              | *boolean*                          | :heavy_check_mark:                 | N/A                                |
| `op`                               | *string*                           | :heavy_check_mark:                 | N/A                                |
| `type`                             | *string*                           | :heavy_check_mark:                 | N/A                                |
| `value`                            | *models.GenerateFirewallRuleValue* | :heavy_minus_sign:                 | N/A                                |