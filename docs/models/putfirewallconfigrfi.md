# PutFirewallConfigRfi

Remote File Inclusion Attack - Prohibit unauthorized upload or execution of remote files.

## Example Usage

```typescript
import { PutFirewallConfigRfi } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigRfi = {
  action: "deny",
  active: false,
};
```

## Fields

| Field                                                                                                                                                                                      | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `action`                                                                                                                                                                                   | [models.PutFirewallConfigSecurityResponse200ApplicationJSONResponseBodyActiveCrsRfiAction](../models/putfirewallconfigsecurityresponse200applicationjsonresponsebodyactivecrsrfiaction.md) | :heavy_check_mark:                                                                                                                                                                         | N/A                                                                                                                                                                                        |
| `active`                                                                                                                                                                                   | *boolean*                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                         | N/A                                                                                                                                                                                        |