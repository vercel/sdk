# GetSecurityFirewallConfigSecurityResponse200Conditions

## Example Usage

```typescript
import { GetSecurityFirewallConfigSecurityResponse200Conditions } from "@vercel/sdk/models/getsecurityfirewallconfiglogheaderssecurityresponse200applicationjsonresponsebodydraftrules2.js";

let value: GetSecurityFirewallConfigSecurityResponse200Conditions = {
  type: "shared_condition",
  op: "eq",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `type`                                                                             | [models.GetSecurityFirewallConfigType](../models/getsecurityfirewallconfigtype.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `op`                                                                               | [models.GetSecurityFirewallConfigOp](../models/getsecurityfirewallconfigop.md)     | :heavy_check_mark:                                                                 | N/A                                                                                |
| `neg`                                                                              | *boolean*                                                                          | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `key`                                                                              | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `value`                                                                            | *models.GetSecurityFirewallConfigValue*                                            | :heavy_minus_sign:                                                                 | N/A                                                                                |