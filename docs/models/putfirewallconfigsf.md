# PutFirewallConfigSf

Session Fixation Attack - Prevent unauthorized takeover of user sessions by enforcing unique session IDs.

## Example Usage

```typescript
import { PutFirewallConfigSf } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigSf = {
  action: "log",
  active: true,
};
```

## Fields

| Field                                                                                                                                                                                    | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                                                                                                 | [models.PutFirewallConfigSecurityResponse200ApplicationJSONResponseBodyActiveCrsSfAction](../models/putfirewallconfigsecurityresponse200applicationjsonresponsebodyactivecrssfaction.md) | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `active`                                                                                                                                                                                 | *boolean*                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |