# RequestBody20

Update a managed rule group

## Example Usage

```typescript
import { RequestBody20 } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: RequestBody20 = {
  action: "<value>",
  id: "ai_bots",
  value: {},
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                                                           | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `id`                                                                                                                                               | [models.UpdateFirewallConfigRequestBodyId](../models/updatefirewallconfigrequestbodyid.md)                                                         | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `value`                                                                                                                                            | Record<string, [models.UpdateFirewallConfigRequestBodySecurityRequest20Value](../models/updatefirewallconfigrequestbodysecurityrequest20value.md)> | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |