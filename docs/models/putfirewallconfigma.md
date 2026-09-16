# PutFirewallConfigMa

Multipart Attack - Block attempts to bypass security controls using multipart/form-data encoding.

## Example Usage

```typescript
import { PutFirewallConfigMa } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigMa = {
  action: "log",
  active: false,
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `action`                                                                                                                                                           | [models.PutFirewallConfigSecurityResponse200ApplicationJSONResponseBodyAction](../models/putfirewallconfigsecurityresponse200applicationjsonresponsebodyaction.md) | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `active`                                                                                                                                                           | *boolean*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |