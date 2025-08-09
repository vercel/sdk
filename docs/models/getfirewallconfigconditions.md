# GetFirewallConfigConditions

## Example Usage

```typescript
import { GetFirewallConfigConditions } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: GetFirewallConfigConditions = {
  type: "scheme",
  op: "eq",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                            | [models.GetFirewallConfigType](../models/getfirewallconfigtype.md)                                                | :heavy_check_mark:                                                                                                | [Parameter](https://vercel.com/docs/security/vercel-waf/rule-configuration#parameters) from the incoming traffic. |
| `op`                                                                                                              | [models.GetFirewallConfigOp](../models/getfirewallconfigop.md)                                                    | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `neg`                                                                                                             | *boolean*                                                                                                         | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `key`                                                                                                             | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `value`                                                                                                           | *models.GetFirewallConfigValue*                                                                                   | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |