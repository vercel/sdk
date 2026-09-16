# GetFirewallConfigRfi

Remote File Inclusion Attack - Prohibit unauthorized upload or execution of remote files.

## Example Usage

```typescript
import { GetFirewallConfigRfi } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: GetFirewallConfigRfi = {
  action: "log",
  active: false,
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `action`                                                                                                                                                                 | [models.GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsAction](../models/getfirewallconfigsecurityresponse200applicationjsonresponsebodycrsaction.md) | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `active`                                                                                                                                                                 | *boolean*                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |