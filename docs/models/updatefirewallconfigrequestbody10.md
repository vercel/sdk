# UpdateFirewallConfigRequestBody10

Reorder a custom rule

## Example Usage

```typescript
import { UpdateFirewallConfigRequestBody10 } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: UpdateFirewallConfigRequestBody10 = {
  action: "ip.remove",
  id: "<id>",
  value: "<value>",
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `action`                                                                                                                             | [models.UpdateFirewallConfigRequestBodySecurityRequest10Action](../models/updatefirewallconfigrequestbodysecurityrequest10action.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `id`                                                                                                                                 | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `value`                                                                                                                              | *any*                                                                                                                                | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |