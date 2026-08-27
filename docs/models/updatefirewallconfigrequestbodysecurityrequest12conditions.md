# UpdateFirewallConfigRequestBodySecurityRequest12Conditions

## Example Usage

```typescript
import { UpdateFirewallConfigRequestBodySecurityRequest12Conditions } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: UpdateFirewallConfigRequestBodySecurityRequest12Conditions = {
  type: "geo_country",
  op: "suf",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                           | [models.UpdateFirewallConfigRequestBodySecurityRequest12Type](../models/updatefirewallconfigrequestbodysecurityrequest12type.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `op`                                                                                                                             | [models.UpdateFirewallConfigRequestBodySecurityRequest12Op](../models/updatefirewallconfigrequestbodysecurityrequest12op.md)     | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `neg`                                                                                                                            | *boolean*                                                                                                                        | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `key`                                                                                                                            | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `value`                                                                                                                          | *models.UpdateFirewallConfigRequestBodySecurityRequest12ValueValue*                                                              | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |