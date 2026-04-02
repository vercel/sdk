# Blob2

## Example Usage

```typescript
import { Blob2 } from "@vercel/sdk/models/ninetyeight.js";

let value: Blob2 = {
  updatedAt: 6885.52,
  blockReason: "hard_blocked",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `updatedAt`                                                              | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `blockedFrom`                                                            | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `blockedUntil`                                                           | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `blockReason`                                                            | [models.UserEventBlobBlockReason](../models/usereventblobblockreason.md) | :heavy_check_mark:                                                       | N/A                                                                      |