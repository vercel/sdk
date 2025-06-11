# UpdateFirewallConfigRequestBodyConditions

## Example Usage

```typescript
import { UpdateFirewallConfigRequestBodyConditions } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: UpdateFirewallConfigRequestBodyConditions = {
  type: "path",
  op: "re",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                         | [models.UpdateFirewallConfigRequestBodySecurityType](../models/updatefirewallconfigrequestbodysecuritytype.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `op`                                                                                                           | [models.UpdateFirewallConfigRequestBodyOp](../models/updatefirewallconfigrequestbodyop.md)                     | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `neg`                                                                                                          | *boolean*                                                                                                      | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `key`                                                                                                          | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `value`                                                                                                        | *models.UpdateFirewallConfigRequestBodySecurityRequest3Value*                                                  | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |