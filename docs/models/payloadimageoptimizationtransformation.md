# PayloadImageOptimizationTransformation

## Example Usage

```typescript
import { PayloadImageOptimizationTransformation } from "@vercel/sdk/models/oldteam.js";

let value: PayloadImageOptimizationTransformation = {
  updatedAt: 344.86,
  blockReason: "admin_override",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `updatedAt`                                                                                        | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `blockedFrom`                                                                                      | *number*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `blockedUntil`                                                                                     | *number*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `blockReason`                                                                                      | [models.UserEventPayload85NewOwnerBlockReason](../models/usereventpayload85newownerblockreason.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |