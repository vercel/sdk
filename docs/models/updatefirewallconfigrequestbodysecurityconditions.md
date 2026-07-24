# UpdateFirewallConfigRequestBodySecurityConditions

## Example Usage

```typescript
import { UpdateFirewallConfigRequestBodySecurityConditions } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: UpdateFirewallConfigRequestBodySecurityConditions = {
  type: "environment",
  op: "re",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                       | [models.UpdateFirewallConfigRequestBodySecurityRequestType](../models/updatefirewallconfigrequestbodysecurityrequesttype.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `op`                                                                                                                         | [models.UpdateFirewallConfigRequestBodySecurityOp](../models/updatefirewallconfigrequestbodysecurityop.md)                   | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `neg`                                                                                                                        | *boolean*                                                                                                                    | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `key`                                                                                                                        | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `value`                                                                                                                      | *models.UpdateFirewallConfigRequestBodySecurityRequest7Value*                                                                | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |