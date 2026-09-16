# CreateSecurityFirewallConfigByConfigVersionActivateSecurityConditions

## Example Usage

```typescript
import { CreateSecurityFirewallConfigByConfigVersionActivateSecurityConditions } from "@vercel/sdk/models/createsecurityfirewallconfigbyconfigversionactivateop.js";

let value:
  CreateSecurityFirewallConfigByConfigVersionActivateSecurityConditions = {
    op: "gt",
    type: "geo_continent",
  };
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `key`                                                                                                                                  | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `neg`                                                                                                                                  | *boolean*                                                                                                                              | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `op`                                                                                                                                   | [models.CreateSecurityFirewallConfigByConfigVersionActivateOp](../models/createsecurityfirewallconfigbyconfigversionactivateop.md)     | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `type`                                                                                                                                 | [models.CreateSecurityFirewallConfigByConfigVersionActivateType](../models/createsecurityfirewallconfigbyconfigversionactivatetype.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `value`                                                                                                                                | *models.CreateSecurityFirewallConfigByConfigVersionActivateValue*                                                                      | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |