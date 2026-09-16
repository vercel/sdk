# GetFirewallConfigLfi

Local File Inclusion Attack - Prevent unauthorized access to local files through web applications.

## Example Usage

```typescript
import { GetFirewallConfigLfi } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: GetFirewallConfigLfi = {
  action: "log",
  active: false,
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `action`                                                                                               | [models.GetFirewallConfigSecurityResponseAction](../models/getfirewallconfigsecurityresponseaction.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `active`                                                                                               | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | N/A                                                                                                    |