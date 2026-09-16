# GetSecurityFirewallConfigSecurityResponse200Conditions

## Example Usage

```typescript
import { GetSecurityFirewallConfigSecurityResponse200Conditions } from "@vercel/sdk/models/getsecurityfirewallconfigrulessecurityresponse200applicationjsonresponsebodydraft2actionaction.js";

let value: GetSecurityFirewallConfigSecurityResponse200Conditions = {
  op: "re",
  type: "bot_name",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `key`                                                                              | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `neg`                                                                              | *boolean*                                                                          | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `op`                                                                               | [models.GetSecurityFirewallConfigOp](../models/getsecurityfirewallconfigop.md)     | :heavy_check_mark:                                                                 | N/A                                                                                |
| `type`                                                                             | [models.GetSecurityFirewallConfigType](../models/getsecurityfirewallconfigtype.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `value`                                                                            | *models.GetSecurityFirewallConfigValue*                                            | :heavy_minus_sign:                                                                 | N/A                                                                                |