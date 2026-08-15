# PutFirewallConfigSecurityResponseConditions

## Example Usage

```typescript
import { PutFirewallConfigSecurityResponseConditions } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigSecurityResponseConditions = {
  type: "domain_environment",
  op: "re",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `type`                                                                             | [models.PutFirewallConfigSecurityType](../models/putfirewallconfigsecuritytype.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `op`                                                                               | [models.PutFirewallConfigSecurityOp](../models/putfirewallconfigsecurityop.md)     | :heavy_check_mark:                                                                 | N/A                                                                                |
| `neg`                                                                              | *boolean*                                                                          | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `key`                                                                              | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `value`                                                                            | *models.PutFirewallConfigSecurityValue*                                            | :heavy_minus_sign:                                                                 | N/A                                                                                |