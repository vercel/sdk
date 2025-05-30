# PutFirewallConfigConditions

## Example Usage

```typescript
import { PutFirewallConfigConditions } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigConditions = {
  type: "user_agent",
  op: "ninc",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `type`                                                                             | [models.PutFirewallConfigSecurityType](../models/putfirewallconfigsecuritytype.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `op`                                                                               | [models.PutFirewallConfigOp](../models/putfirewallconfigop.md)                     | :heavy_check_mark:                                                                 | N/A                                                                                |
| `neg`                                                                              | *boolean*                                                                          | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `key`                                                                              | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `value`                                                                            | *models.PutFirewallConfigValue*                                                    | :heavy_minus_sign:                                                                 | N/A                                                                                |