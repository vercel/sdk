# GetFirewallConfigMa

Multipart Attack - Block attempts to bypass security controls using multipart/form-data encoding.

## Example Usage

```typescript
import { GetFirewallConfigMa } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: GetFirewallConfigMa = {
  active: true,
  action: "log",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `active`                                                                               | *boolean*                                                                              | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `action`                                                                               | [models.GetFirewallConfigSecurityAction](../models/getfirewallconfigsecurityaction.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |