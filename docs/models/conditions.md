# Conditions

## Example Usage

```typescript
import { Conditions } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: Conditions = {
  type: "user_agent",
  op: "re",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                           | [models.UpdateFirewallConfigRequestBodyType](../models/updatefirewallconfigrequestbodytype.md)                                   | :heavy_check_mark:                                                                                                               | [Parameter](https://vercel.com/docs/security/vercel-waf/rule-configuration#parameters) from the incoming traffic.                |
| `op`                                                                                                                             | [models.Op](../models/op.md)                                                                                                     | :heavy_check_mark:                                                                                                               | [Operator](https://vercel.com/docs/security/vercel-waf/rule-configuration#operators) used to compare the parameter with a value. |
| `neg`                                                                                                                            | *boolean*                                                                                                                        | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `key`                                                                                                                            | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `value`                                                                                                                          | *models.UpdateFirewallConfigRequestBodySecurityRequest2Value*                                                                    | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |