# PutFirewallConfigSecurityResponseConditions

## Example Usage

```typescript
import { PutFirewallConfigSecurityResponseConditions } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigSecurityResponseConditions = {
  op: "gt",
  type: "server_action",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `key`                                                                              | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `neg`                                                                              | *boolean*                                                                          | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `op`                                                                               | [models.PutFirewallConfigSecurityOp](../models/putfirewallconfigsecurityop.md)     | :heavy_check_mark:                                                                 | N/A                                                                                |
| `type`                                                                             | [models.PutFirewallConfigSecurityType](../models/putfirewallconfigsecuritytype.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `value`                                                                            | *models.PutFirewallConfigSecurityValue*                                            | :heavy_minus_sign:                                                                 | N/A                                                                                |