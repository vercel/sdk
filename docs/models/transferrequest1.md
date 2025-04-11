# TransferRequest1

## Example Usage

```typescript
import { TransferRequest1 } from "@vercel/sdk/models/getconfigurationop.js";

let value: TransferRequest1 = {
  kind: "transfer-to-marketplace",
  requestId: "<id>",
  transferId: "<id>",
  requester: {
    name: "<value>",
  },
  createdAt: 2542.83,
  expiresAt: 1531.68,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `kind`                                                                       | [models.Kind](../models/kind.md)                                             | :heavy_check_mark:                                                           | N/A                                                                          |
| `metadata`                                                                   | Record<string, *any*>                                                        | :heavy_minus_sign:                                                           | N/A                                                                          |
| `billingPlan`                                                                | [models.TransferRequestBillingPlan](../models/transferrequestbillingplan.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `requestId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `transferId`                                                                 | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `requester`                                                                  | [models.Requester](../models/requester.md)                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `createdAt`                                                                  | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `expiresAt`                                                                  | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `discardedAt`                                                                | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `discardedBy`                                                                | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `approvedAt`                                                                 | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `approvedBy`                                                                 | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `authorizationId`                                                            | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |