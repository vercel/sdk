# GetSecurityFirewallConfigSecurityResponse200ApplicationJSONResponseBodyConditions

## Example Usage

```typescript
import {
  GetSecurityFirewallConfigSecurityResponse200ApplicationJSONResponseBodyConditions,
} from "@vercel/sdk/models/getsecurityfirewallconfigsecurityresponsemanagedrules.js";

let value:
  GetSecurityFirewallConfigSecurityResponse200ApplicationJSONResponseBodyConditions =
    {
      type: "bot_status",
      op: "gte",
    };
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`                                                                                             | [models.GetSecurityFirewallConfigSecurityType](../models/getsecurityfirewallconfigsecuritytype.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `op`                                                                                               | [models.GetSecurityFirewallConfigSecurityOp](../models/getsecurityfirewallconfigsecurityop.md)     | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `neg`                                                                                              | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `key`                                                                                              | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `value`                                                                                            | *models.GetSecurityFirewallConfigSecurityValue*                                                    | :heavy_minus_sign:                                                                                 | N/A                                                                                                |