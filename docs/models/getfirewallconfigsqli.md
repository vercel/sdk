# GetFirewallConfigSqli

SQL Injection Attack - Prohibit unauthorized use of SQL commands to manipulate databases.

## Example Usage

```typescript
import { GetFirewallConfigSqli } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: GetFirewallConfigSqli = {
  action: "log",
  active: false,
};
```

## Fields

| Field                                                                                                                                                                            | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                                                                                         | [models.GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsSqliAction](../models/getfirewallconfigsecurityresponse200applicationjsonresponsebodycrssqliaction.md) | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |
| `active`                                                                                                                                                                         | *boolean*                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |