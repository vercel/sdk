# TransferRequest2

## Example Usage

```typescript
import { TransferRequest2 } from "@vercel/sdk/models/getconfigurationop.js";

let value: TransferRequest2 = {
  kind: "transfer-from-marketplace",
  requestId: "<id>",
  transferId: "<id>",
  requester: {
    name: "<value>",
  },
  createdAt: 2316.33,
  expiresAt: 1385.21,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `kind`                                                                   | [models.TransferRequestKind](../models/transferrequestkind.md)           | :heavy_check_mark:                                                       | N/A                                                                      |
| `requestId`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `transferId`                                                             | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `requester`                                                              | [models.TransferRequestRequester](../models/transferrequestrequester.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `createdAt`                                                              | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `expiresAt`                                                              | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `discardedAt`                                                            | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `discardedBy`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `approvedAt`                                                             | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `approvedBy`                                                             | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `authorizationId`                                                        | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |