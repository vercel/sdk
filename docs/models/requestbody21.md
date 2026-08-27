# RequestBody21

Update a managed rule group

## Example Usage

```typescript
import { RequestBody21 } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: RequestBody21 = {
  action: "<value>",
  id: "bot_protection",
  value: {},
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                                                           | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `id`                                                                                                                                               | [models.UpdateFirewallConfigRequestBodyId](../models/updatefirewallconfigrequestbodyid.md)                                                         | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `value`                                                                                                                                            | Record<string, [models.UpdateFirewallConfigRequestBodySecurityRequest21Value](../models/updatefirewallconfigrequestbodysecurityrequest21value.md)> | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |