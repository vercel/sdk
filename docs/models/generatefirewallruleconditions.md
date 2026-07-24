# GenerateFirewallRuleConditions

## Example Usage

```typescript
import { GenerateFirewallRuleConditions } from "@vercel/sdk/models/generatefirewallruleop.js";

let value: GenerateFirewallRuleConditions = {
  type: "<value>",
  op: "<value>",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `type`                             | *string*                           | :heavy_check_mark:                 | N/A                                |
| `op`                               | *string*                           | :heavy_check_mark:                 | N/A                                |
| `neg`                              | *boolean*                          | :heavy_minus_sign:                 | N/A                                |
| `key`                              | *string*                           | :heavy_minus_sign:                 | N/A                                |
| `value`                            | *models.GenerateFirewallRuleValue* | :heavy_minus_sign:                 | N/A                                |