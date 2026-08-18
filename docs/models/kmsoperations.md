# KmsOperations

## Example Usage

```typescript
import { KmsOperations } from "@vercel/sdk/models/onehundredandthirtyfour.js";

let value: KmsOperations = {
  updatedAt: 7101.38,
  blockReason: "admin_override",
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `updatedAt`                                                                                                                                              | *number*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `blockedFrom`                                                                                                                                            | *number*                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                       | N/A                                                                                                                                                      |
| `blockedUntil`                                                                                                                                           | *number*                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                       | N/A                                                                                                                                                      |
| `blockReason`                                                                                                                                            | [models.UserEventPayload162NewOwnerFeatureBlocksKmsOperationsBlockReason](../models/usereventpayload162newownerfeatureblockskmsoperationsblockreason.md) | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |