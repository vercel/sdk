# PutFirewallConfigSd

Scanner Detection - Detect and prevent reconnaissance activities from network scanning tools.

## Example Usage

```typescript
import { PutFirewallConfigSd } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigSd = {
  action: "log",
  active: true,
};
```

## Fields

| Field                                                                                                                                                                                    | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                                                                                                 | [models.PutFirewallConfigSecurityResponse200ApplicationJSONResponseBodyActiveCrsSdAction](../models/putfirewallconfigsecurityresponse200applicationjsonresponsebodyactivecrssdaction.md) | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `active`                                                                                                                                                                                 | *boolean*                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |