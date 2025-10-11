# UpdateResourceRequestBody

## Example Usage

```typescript
import { UpdateResourceRequestBody } from "@vercel/sdk/models/updateresourceop.js";

let value: UpdateResourceRequestBody = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `ownership`                                                                  | [models.UpdateResourceOwnership](../models/updateresourceownership.md)       | :heavy_minus_sign:                                                           | N/A                                                                          |
| `name`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `status`                                                                     | [models.UpdateResourceStatus](../models/updateresourcestatus.md)             | :heavy_minus_sign:                                                           | N/A                                                                          |
| `metadata`                                                                   | Record<string, *any*>                                                        | :heavy_minus_sign:                                                           | N/A                                                                          |
| `billingPlan`                                                                | [models.UpdateResourceBillingPlan](../models/updateresourcebillingplan.md)   | :heavy_minus_sign:                                                           | N/A                                                                          |
| `notification`                                                               | [models.UpdateResourceNotification](../models/updateresourcenotification.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `extras`                                                                     | Record<string, *any*>                                                        | :heavy_minus_sign:                                                           | N/A                                                                          |
| `secrets`                                                                    | [models.UpdateResourceSecrets](../models/updateresourcesecrets.md)[]         | :heavy_minus_sign:                                                           | N/A                                                                          |