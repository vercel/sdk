# UpdateFirewallConfigRequestBody10

Enable Firewall

## Example Usage

```typescript
import { UpdateFirewallConfigRequestBody10 } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: UpdateFirewallConfigRequestBody10 = {
  action: "ip.remove",
  value: "<value>",
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `action`                                                                                                                             | [models.UpdateFirewallConfigRequestBodySecurityRequest10Action](../models/updatefirewallconfigrequestbodysecurityrequest10action.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `id`                                                                                                                                 | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `value`                                                                                                                              | *any*                                                                                                                                | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |