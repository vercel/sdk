# UserEventPayloadDataCache

## Example Usage

```typescript
import { UserEventPayloadDataCache } from "@vercel/sdk/models/userevent.js";

let value: UserEventPayloadDataCache = {
  updatedAt: 2335.94,
  blockReason: "admin_override",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `updatedAt`                                                                        | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `blockedFrom`                                                                      | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `blockedUntil`                                                                     | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `blockReason`                                                                      | [models.UserEventPayload62BlockReason](../models/usereventpayload62blockreason.md) | :heavy_check_mark:                                                                 | N/A                                                                                |