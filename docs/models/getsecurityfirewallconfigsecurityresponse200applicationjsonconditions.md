# GetSecurityFirewallConfigSecurityResponse200ApplicationJSONConditions

## Example Usage

```typescript
import { GetSecurityFirewallConfigSecurityResponse200ApplicationJSONConditions } from "@vercel/sdk/models/getsecurityfirewallconfigsecurityresponsemanagedrules.js";

let value:
  GetSecurityFirewallConfigSecurityResponse200ApplicationJSONConditions = {
    type: "geo_as_number",
    op: "suf",
  };
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                             | [models.GetSecurityFirewallConfigSecurityResponseType](../models/getsecurityfirewallconfigsecurityresponsetype.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `op`                                                                                                               | [models.GetSecurityFirewallConfigSecurityResponseOp](../models/getsecurityfirewallconfigsecurityresponseop.md)     | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `neg`                                                                                                              | *boolean*                                                                                                          | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `key`                                                                                                              | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `value`                                                                                                            | *models.GetSecurityFirewallConfigSecurityResponseValue*                                                            | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |