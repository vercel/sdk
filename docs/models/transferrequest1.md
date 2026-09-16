# TransferRequest1

## Example Usage

```typescript
import { TransferRequest1 } from "@vercel/sdk/models/getconfigurationop.js";

let value: TransferRequest1 = {
  createdAt: 2542.83,
  expiresAt: 1531.68,
  kind: "transfer-to-marketplace",
  requester: {
    name: "<value>",
  },
  requestId: "<id>",
  transferId: "<id>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `approvedAt`                                                                 | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `approvedBy`                                                                 | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `authorizationId`                                                            | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `billingPlan`                                                                | [models.TransferRequestBillingPlan](../models/transferrequestbillingplan.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `createdAt`                                                                  | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `discardedAt`                                                                | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `discardedBy`                                                                | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `expiresAt`                                                                  | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `kind`                                                                       | *"transfer-to-marketplace"*                                                  | :heavy_check_mark:                                                           | N/A                                                                          |
| `metadata`                                                                   | Record<string, *any*>                                                        | :heavy_minus_sign:                                                           | N/A                                                                          |
| `requester`                                                                  | [models.Requester](../models/requester.md)                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `requestId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `transferId`                                                                 | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |