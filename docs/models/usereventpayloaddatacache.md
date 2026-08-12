# UserEventPayloadDataCache

## Example Usage

```typescript
import { UserEventPayloadDataCache } from "@vercel/sdk/models/usereventjobpayload9810headinfo.js";

let value: UserEventPayloadDataCache = {
  updatedAt: 2335.94,
  blockReason: "hard_blocked",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `updatedAt`                                                                          | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `blockedFrom`                                                                        | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `blockedUntil`                                                                       | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `blockReason`                                                                        | [models.UserEventPayload158BlockReason](../models/usereventpayload158blockreason.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |