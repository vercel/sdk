# UpdateFirewallConfigRequestBodySecurityRequest10Conditions

## Example Usage

```typescript
import { UpdateFirewallConfigRequestBodySecurityRequest10Conditions } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: UpdateFirewallConfigRequestBodySecurityRequest10Conditions = {
  type: "ja3_digest",
  op: "lte",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                           | [models.UpdateFirewallConfigRequestBodySecurityRequest10Type](../models/updatefirewallconfigrequestbodysecurityrequest10type.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `op`                                                                                                                             | [models.UpdateFirewallConfigRequestBodySecurityRequest10Op](../models/updatefirewallconfigrequestbodysecurityrequest10op.md)     | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `neg`                                                                                                                            | *boolean*                                                                                                                        | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `key`                                                                                                                            | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `value`                                                                                                                          | *models.UpdateFirewallConfigRequestBodySecurityRequest10ValueValue*                                                              | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |