# GetSecurityFirewallConfigSecurityIps

## Example Usage

```typescript
import { GetSecurityFirewallConfigSecurityIps } from "@vercel/sdk/models/getsecurityfirewallconfigresponsebody.js";

let value: GetSecurityFirewallConfigSecurityIps = {
  id: "<id>",
  hostname: "bad-louse.info",
  ip: "dffd:cfee:42c5:4694:98d7:22a2:beb3:afbc",
  action: "bypass",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `hostname`                                                                                                             | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `ip`                                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `notes`                                                                                                                | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `action`                                                                                                               | [models.GetSecurityFirewallConfigSecurityResponseAction](../models/getsecurityfirewallconfigsecurityresponseaction.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |