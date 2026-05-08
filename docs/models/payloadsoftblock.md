# PayloadSoftBlock

## Example Usage

```typescript
import { PayloadSoftBlock } from "@vercel/sdk/models/fluidduration.js";

let value: PayloadSoftBlock = {
  blockedAt: 5219.47,
  reason: "FAIR_USE_LIMITS_EXCEEDED",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `blockedAt`                                                                          | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `reason`                                                                             | [models.UserEventPayloadReason](../models/usereventpayloadreason.md)                 | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `blockedDueToOverageType`                                                            | [models.PayloadBlockedDueToOverageType](../models/payloadblockedduetooveragetype.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |