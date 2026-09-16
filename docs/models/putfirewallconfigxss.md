# PutFirewallConfigXss

XSS Attack - Prevent injection of malicious scripts into trusted webpages.

## Example Usage

```typescript
import { PutFirewallConfigXss } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigXss = {
  action: "deny",
  active: true,
};
```

## Fields

| Field                                                                                                                                                                                      | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `action`                                                                                                                                                                                   | [models.PutFirewallConfigSecurityResponse200ApplicationJSONResponseBodyActiveCrsXssAction](../models/putfirewallconfigsecurityresponse200applicationjsonresponsebodyactivecrsxssaction.md) | :heavy_check_mark:                                                                                                                                                                         | N/A                                                                                                                                                                                        |
| `active`                                                                                                                                                                                   | *boolean*                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                         | N/A                                                                                                                                                                                        |