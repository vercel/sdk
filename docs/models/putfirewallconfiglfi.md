# PutFirewallConfigLfi

Local File Inclusion Attack - Prevent unauthorized access to local files through web applications.

## Example Usage

```typescript
import { PutFirewallConfigLfi } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigLfi = {
  action: "log",
  active: false,
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `action`                                                                                                                                   | [models.PutFirewallConfigSecurityResponse200ApplicationJSONAction](../models/putfirewallconfigsecurityresponse200applicationjsonaction.md) | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `active`                                                                                                                                   | *boolean*                                                                                                                                  | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |