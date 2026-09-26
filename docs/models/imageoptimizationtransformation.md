# ImageOptimizationTransformation

## Example Usage

```typescript
import { ImageOptimizationTransformation } from "@vercel/sdk/models/payloadspeedinsightsfree.js";

let value: ImageOptimizationTransformation = {
  blockReason: "limits_exceeded",
  updatedAt: 695.97,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `blockedFrom`                                                                        | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `blockedUntil`                                                                       | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `blockReason`                                                                        | [models.UserEventPayload177BlockReason](../models/usereventpayload177blockreason.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `updatedAt`                                                                          | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |