# UserEventPayloadDataCache

## Example Usage

```typescript
import { UserEventPayloadDataCache } from "@vercel/sdk/models/usereventpayload140newenvvartype.js";

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
| `blockReason`                                                                        | [models.UserEventPayload152BlockReason](../models/usereventpayload152blockreason.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |