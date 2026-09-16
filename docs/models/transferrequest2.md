# TransferRequest2

## Example Usage

```typescript
import { TransferRequest2 } from "@vercel/sdk/models/getconfigurationop.js";

let value: TransferRequest2 = {
  createdAt: 2316.33,
  expiresAt: 1385.21,
  kind: "transfer-from-marketplace",
  requester: {
    name: "<value>",
  },
  requestId: "<id>",
  transferId: "<id>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `approvedAt`                                                             | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `approvedBy`                                                             | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `authorizationId`                                                        | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `createdAt`                                                              | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `discardedAt`                                                            | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `discardedBy`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `expiresAt`                                                              | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `kind`                                                                   | *"transfer-from-marketplace"*                                            | :heavy_check_mark:                                                       | N/A                                                                      |
| `requester`                                                              | [models.TransferRequestRequester](../models/transferrequestrequester.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `requestId`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `transferId`                                                             | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |