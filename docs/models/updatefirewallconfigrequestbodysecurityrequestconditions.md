# UpdateFirewallConfigRequestBodySecurityRequestConditions

## Example Usage

```typescript
import { UpdateFirewallConfigRequestBodySecurityRequestConditions } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: UpdateFirewallConfigRequestBodySecurityRequestConditions = {
  type: "ja4_digest",
  op: "lte",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                         | [models.UpdateFirewallConfigRequestBodySecurityRequest6Type](../models/updatefirewallconfigrequestbodysecurityrequest6type.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `op`                                                                                                                           | [models.UpdateFirewallConfigRequestBodySecurityRequestOp](../models/updatefirewallconfigrequestbodysecurityrequestop.md)       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `neg`                                                                                                                          | *boolean*                                                                                                                      | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `key`                                                                                                                          | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `value`                                                                                                                        | *models.UpdateFirewallConfigRequestBodySecurityRequest6Value*                                                                  | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |