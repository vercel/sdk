# UpdateFirewallConfigRequestBodySecurityRequestConditions

## Example Usage

```typescript
import { UpdateFirewallConfigRequestBodySecurityRequestConditions } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: UpdateFirewallConfigRequestBodySecurityRequestConditions = {
  type: "geo_as_number",
  op: "lte",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                         | [models.UpdateFirewallConfigRequestBodySecurityRequest8Type](../models/updatefirewallconfigrequestbodysecurityrequest8type.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `op`                                                                                                                           | [models.UpdateFirewallConfigRequestBodySecurityRequestOp](../models/updatefirewallconfigrequestbodysecurityrequestop.md)       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `neg`                                                                                                                          | *boolean*                                                                                                                      | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `key`                                                                                                                          | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `value`                                                                                                                        | *models.UpdateFirewallConfigRequestBodySecurityRequest8ValueValue*                                                             | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |