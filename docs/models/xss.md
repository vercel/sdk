# Xss

XSS Attack - Prevent injection of malicious scripts into trusted webpages.

## Example Usage

```typescript
import { Xss } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: Xss = {
  active: false,
  action: "log",
};
```

## Fields

| Field                                                                                                                                                                          | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `active`                                                                                                                                                                       | *boolean*                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `action`                                                                                                                                                                       | [models.GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsXssAction](../models/getfirewallconfigsecurityresponse200applicationjsonresponsebodycrsxssaction.md) | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |