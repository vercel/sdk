# Gen

Generic Attack - Provide broad protection from various undefined or novel attack vectors.

## Example Usage

```typescript
import { Gen } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: Gen = {
  active: false,
  action: "deny",
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `active`                                                                                                                                                                 | *boolean*                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `action`                                                                                                                                                                 | [models.GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsAction](../models/getfirewallconfigsecurityresponse200applicationjsonresponsebodycrsaction.md) | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |