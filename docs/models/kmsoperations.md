# KmsOperations

## Example Usage

```typescript
import { KmsOperations } from "@vercel/sdk/models/sourceimages.js";

let value: KmsOperations = {
  blockReason: "limits_exceeded",
  updatedAt: 3146.6,
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `blockedFrom`                                                                                        | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `blockedUntil`                                                                                       | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `blockReason`                                                                                        | [models.UserEventPayload177NewOwnerBlockReason](../models/usereventpayload177newownerblockreason.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `updatedAt`                                                                                          | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |