# UpdateFirewallConfigRequestBody1

Enable Firewall

## Example Usage

```typescript
import { UpdateFirewallConfigRequestBody1 } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: UpdateFirewallConfigRequestBody1 = {
  action: "firewallEnabled",
  value: false,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `action`                                                   | [models.RequestBodyAction](../models/requestbodyaction.md) | :heavy_check_mark:                                         | N/A                                                        |
| `id`                                                       | *any*                                                      | :heavy_minus_sign:                                         | N/A                                                        |
| `value`                                                    | *boolean*                                                  | :heavy_check_mark:                                         | N/A                                                        |