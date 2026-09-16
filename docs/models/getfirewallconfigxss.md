# GetFirewallConfigXss

XSS Attack - Prevent injection of malicious scripts into trusted webpages.

## Example Usage

```typescript
import { GetFirewallConfigXss } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: GetFirewallConfigXss = {
  action: "log",
  active: true,
};
```

## Fields

| Field                                                                                                                                                                          | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `action`                                                                                                                                                                       | [models.GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsXssAction](../models/getfirewallconfigsecurityresponse200applicationjsonresponsebodycrsxssaction.md) | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `active`                                                                                                                                                                       | *boolean*                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |