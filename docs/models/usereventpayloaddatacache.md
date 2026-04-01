# UserEventPayloadDataCache

## Example Usage

```typescript
import { UserEventPayloadDataCache } from "@vercel/sdk/models/edgeconfig.js";

let value: UserEventPayloadDataCache = {
  updatedAt: 2335.94,
  blockReason: "limits_exceeded",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `updatedAt`                                                                          | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `blockedFrom`                                                                        | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `blockedUntil`                                                                       | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `blockReason`                                                                        | [models.UserEventPayload113BlockReason](../models/usereventpayload113blockreason.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |