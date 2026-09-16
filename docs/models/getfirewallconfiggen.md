# GetFirewallConfigGen

Generic Attack - Provide broad protection from various undefined or novel attack vectors.

## Example Usage

```typescript
import { GetFirewallConfigGen } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: GetFirewallConfigGen = {
  action: "deny",
  active: false,
};
```

## Fields

| Field                                                                                                                                                                          | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `action`                                                                                                                                                                       | [models.GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsGenAction](../models/getfirewallconfigsecurityresponse200applicationjsonresponsebodycrsgenaction.md) | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `active`                                                                                                                                                                       | *boolean*                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |