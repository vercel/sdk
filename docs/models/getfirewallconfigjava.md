# GetFirewallConfigJava

Java Attack - Mitigate risks of exploitation targeting Java-based applications or components.

## Example Usage

```typescript
import { GetFirewallConfigJava } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: GetFirewallConfigJava = {
  action: "log",
  active: true,
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `action`                                                                               | [models.GetFirewallConfigSecurityAction](../models/getfirewallconfigsecurityaction.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `active`                                                                               | *boolean*                                                                              | :heavy_check_mark:                                                                     | N/A                                                                                    |