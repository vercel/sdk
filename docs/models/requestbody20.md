# RequestBody20

Update a managed ruleset

## Example Usage

```typescript
import { RequestBody20 } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: RequestBody20 = {
  action: "<value>",
  id: "ai_bots",
  value: {
    active: true,
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                                           | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `id`                                                                                                                               | [models.RequestBodyId](../models/requestbodyid.md)                                                                                 | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `value`                                                                                                                            | [models.UpdateFirewallConfigRequestBodySecurityRequest20Value](../models/updatefirewallconfigrequestbodysecurityrequest20value.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |