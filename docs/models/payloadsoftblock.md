# PayloadSoftBlock

## Example Usage

```typescript
import { PayloadSoftBlock } from "@vercel/sdk/models/datacachewrite.js";

let value: PayloadSoftBlock = {
  blockedAt: 5219.47,
  reason: "SUBSCRIPTION_EXPIRED",
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `blockedAt`                                                                                                                     | *number*                                                                                                                        | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `reason`                                                                                                                        | [models.UserEventPayload164Reason](../models/usereventpayload164reason.md)                                                      | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `blockedDueToOverageType`                                                                                                       | [models.PayloadBlockedDueToOverageType](../models/payloadblockedduetooveragetype.md)                                            | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |
| `hobbyAllocationPause`                                                                                                          | [models.PayloadHobbyAllocationPause](../models/payloadhobbyallocationpause.md)                                                  | :heavy_minus_sign:                                                                                                              | Present only when `reason` is `HOBBY_ALLOCATION_PAUSED`. Makes the pause self-describing for support without a separate lookup. |