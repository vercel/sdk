# UpdateFirewallConfigRequestBodySecurityRequest14Value

## Example Usage

```typescript
import { UpdateFirewallConfigRequestBodySecurityRequest14Value } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: UpdateFirewallConfigRequestBodySecurityRequest14Value = {
  hostname: "grumpy-millet.info",
  ip: "220.20.18.231",
  action: "challenge",
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `hostname`                                                                                                                           | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `ip`                                                                                                                                 | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `notes`                                                                                                                              | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `action`                                                                                                                             | [models.UpdateFirewallConfigRequestBodySecurityRequest14Action](../models/updatefirewallconfigrequestbodysecurityrequest14action.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |