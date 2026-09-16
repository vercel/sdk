# GetFirewallConfigRce

Remote Execution Attack - Prevent unauthorized execution of remote scripts or commands.

## Example Usage

```typescript
import { GetFirewallConfigRce } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: GetFirewallConfigRce = {
  action: "deny",
  active: true,
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `action`                                                                                                                                                           | [models.GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyAction](../models/getfirewallconfigsecurityresponse200applicationjsonresponsebodyaction.md) | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `active`                                                                                                                                                           | *boolean*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |