# ImportResourceRequestBody

## Example Usage

```typescript
import { ImportResourceRequestBody } from "@vercel/sdk/models/importresourceop.js";

let value: ImportResourceRequestBody = {
  productId: "<id>",
  name: "<value>",
  status: "resumed",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `ownership`                                                                  | [models.Ownership](../models/ownership.md)                                   | :heavy_minus_sign:                                                           | N/A                                                                          |
| `productId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `status`                                                                     | [models.ImportResourceStatus](../models/importresourcestatus.md)             | :heavy_check_mark:                                                           | N/A                                                                          |
| `metadata`                                                                   | Record<string, *any*>                                                        | :heavy_minus_sign:                                                           | N/A                                                                          |
| `billingPlan`                                                                | [models.ImportResourceBillingPlan](../models/importresourcebillingplan.md)   | :heavy_minus_sign:                                                           | N/A                                                                          |
| `notification`                                                               | [models.ImportResourceNotification](../models/importresourcenotification.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `extras`                                                                     | Record<string, *any*>                                                        | :heavy_minus_sign:                                                           | N/A                                                                          |
| `secrets`                                                                    | [models.ImportResourceSecrets](../models/importresourcesecrets.md)[]         | :heavy_minus_sign:                                                           | N/A                                                                          |