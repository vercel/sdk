# GetSecurityFirewallConfigSecurityResponse200ApplicationJSONConditions

## Example Usage

```typescript
import { GetSecurityFirewallConfigSecurityResponse200ApplicationJSONConditions } from "@vercel/sdk/models/getsecurityfirewallconfigrulesetssecurityresponse200action.js";

let value:
  GetSecurityFirewallConfigSecurityResponse200ApplicationJSONConditions = {
    op: "gte",
    type: "trusted_source",
  };
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `key`                                                                                                              | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `neg`                                                                                                              | *boolean*                                                                                                          | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `op`                                                                                                               | [models.GetSecurityFirewallConfigSecurityResponseOp](../models/getsecurityfirewallconfigsecurityresponseop.md)     | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `type`                                                                                                             | [models.GetSecurityFirewallConfigSecurityResponseType](../models/getsecurityfirewallconfigsecurityresponsetype.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `value`                                                                                                            | *models.GetSecurityFirewallConfigSecurityResponseValue*                                                            | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |