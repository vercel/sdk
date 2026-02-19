# PutFirewallConfigConditions

## Example Usage

```typescript
import { PutFirewallConfigConditions } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigConditions = {
  type: "geo_continent",
  op: "lt",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                            | [models.PutFirewallConfigType](../models/putfirewallconfigtype.md)                                                | :heavy_check_mark:                                                                                                | [Parameter](https://vercel.com/docs/security/vercel-waf/rule-configuration#parameters) from the incoming traffic. |
| `op`                                                                                                              | [models.Op](../models/op.md)                                                                                      | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `neg`                                                                                                             | *boolean*                                                                                                         | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `key`                                                                                                             | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `value`                                                                                                           | *models.PutFirewallConfigValue*                                                                                   | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |