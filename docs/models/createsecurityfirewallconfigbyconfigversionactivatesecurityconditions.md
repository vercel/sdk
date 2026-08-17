# CreateSecurityFirewallConfigByConfigVersionActivateSecurityConditions

## Example Usage

```typescript
import { CreateSecurityFirewallConfigByConfigVersionActivateSecurityConditions } from "@vercel/sdk/models/createsecurityfirewallconfigbyconfigversionactivateop.js";

let value:
  CreateSecurityFirewallConfigByConfigVersionActivateSecurityConditions = {
    type: "domain_environment",
    op: "inc",
  };
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                 | [models.CreateSecurityFirewallConfigByConfigVersionActivateType](../models/createsecurityfirewallconfigbyconfigversionactivatetype.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `op`                                                                                                                                   | [models.CreateSecurityFirewallConfigByConfigVersionActivateOp](../models/createsecurityfirewallconfigbyconfigversionactivateop.md)     | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `neg`                                                                                                                                  | *boolean*                                                                                                                              | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `key`                                                                                                                                  | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `value`                                                                                                                                | *models.CreateSecurityFirewallConfigByConfigVersionActivateValue*                                                                      | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |