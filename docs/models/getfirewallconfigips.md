# GetFirewallConfigIps

## Example Usage

```typescript
import { GetFirewallConfigIps } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: GetFirewallConfigIps = {
  action: "log",
  hostname: "firsthand-valuable.name",
  id: "<id>",
  ip: "f4cb:7e4c:efed:bb7a:dfa3:bee9:ca7d:d0fe",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `action`                                                               | [models.GetFirewallConfigAction](../models/getfirewallconfigaction.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `hostname`                                                             | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `ip`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `notes`                                                                | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |