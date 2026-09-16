# GetSecurityFirewallConfigSecurityResponse200ApplicationJSONResponseBodyConditions

## Example Usage

```typescript
import {
  GetSecurityFirewallConfigSecurityResponse200ApplicationJSONResponseBodyConditions,
} from "@vercel/sdk/models/getsecurityfirewallconfigrulessecurityresponse200applicationjsonresponsebodydraft2actionaction.js";

let value:
  GetSecurityFirewallConfigSecurityResponse200ApplicationJSONResponseBodyConditions =
    {
      op: "ex",
      type: "environment",
    };
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `key`                                                                                              | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `neg`                                                                                              | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `op`                                                                                               | [models.GetSecurityFirewallConfigSecurityOp](../models/getsecurityfirewallconfigsecurityop.md)     | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `type`                                                                                             | [models.GetSecurityFirewallConfigSecurityType](../models/getsecurityfirewallconfigsecuritytype.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `value`                                                                                            | *models.GetSecurityFirewallConfigSecurityValue*                                                    | :heavy_minus_sign:                                                                                 | N/A                                                                                                |