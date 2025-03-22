# RequestBody12

Update a managed rule group

## Example Usage

```typescript
import { RequestBody12 } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: RequestBody12 = {
  action: "<value>",
  id: "<id>",
  value: {
    "key": {
      active: false,
    },
  },
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                                                           | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `id`                                                                                                                                               | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `value`                                                                                                                                            | Record<string, [models.UpdateFirewallConfigRequestBodySecurityRequest12Value](../models/updatefirewallconfigrequestbodysecurityrequest12value.md)> | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |