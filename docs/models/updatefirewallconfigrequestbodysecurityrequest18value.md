# UpdateFirewallConfigRequestBodySecurityRequest18Value

## Example Usage

```typescript
import { UpdateFirewallConfigRequestBodySecurityRequest18Value } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: UpdateFirewallConfigRequestBodySecurityRequest18Value = {
  hostname: "innocent-bog.com",
  ip: "30.194.96.177",
  action: "deny",
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `hostname`                                                                                                                           | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `ip`                                                                                                                                 | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `notes`                                                                                                                              | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `action`                                                                                                                             | [models.UpdateFirewallConfigRequestBodySecurityRequest18Action](../models/updatefirewallconfigrequestbodysecurityrequest18action.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |