# RequestBody16

Update a managed ruleset

## Example Usage

```typescript
import { RequestBody16 } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: RequestBody16 = {
  action: "<value>",
  id: "owasp",
  value: {
    active: false,
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                                           | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `id`                                                                                                                               | [models.RequestBodyId](../models/requestbodyid.md)                                                                                 | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `value`                                                                                                                            | [models.UpdateFirewallConfigRequestBodySecurityRequest16Value](../models/updatefirewallconfigrequestbodysecurityrequest16value.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |