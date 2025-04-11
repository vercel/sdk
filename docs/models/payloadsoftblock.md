# PayloadSoftBlock

## Example Usage

```typescript
import { PayloadSoftBlock } from "@vercel/sdk/models/userevent.js";

let value: PayloadSoftBlock = {
  blockedAt: 5219.47,
  reason: "BLOCKED_FOR_PLATFORM_ABUSE",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `blockedAt`                                                                          | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `reason`                                                                             | [models.PayloadReason](../models/payloadreason.md)                                   | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `blockedDueToOverageType`                                                            | [models.PayloadBlockedDueToOverageType](../models/payloadblockedduetooveragetype.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |