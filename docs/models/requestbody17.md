# RequestBody17

Update a managed rule group

## Example Usage

```typescript
import { RequestBody17 } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: RequestBody17 = {
  action: "<value>",
  id: "owasp",
  value: {},
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                                                           | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `id`                                                                                                                                               | [models.UpdateFirewallConfigRequestBodyId](../models/updatefirewallconfigrequestbodyid.md)                                                         | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `value`                                                                                                                                            | Record<string, [models.UpdateFirewallConfigRequestBodySecurityRequest17Value](../models/updatefirewallconfigrequestbodysecurityrequest17value.md)> | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |