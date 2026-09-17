# PayloadSoftBlock

## Example Usage

```typescript
import { PayloadSoftBlock } from "@vercel/sdk/models/previousrule.js";

let value: PayloadSoftBlock = {
  blockedAt: 5219.47,
  reason: "SUBSCRIPTION_EXPIRED",
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `blockedAt`                                                                                                                                            | *number*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `blockedDueToOverageType`                                                                                                                              | [models.PayloadBlockedDueToOverageType](../models/payloadblockedduetooveragetype.md)                                                                   | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |
| `reason`                                                                                                                                               | [models.UserEventPayload171Reason](../models/usereventpayload171reason.md)                                                                             | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `unpauseAt`                                                                                                                                            | *number*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | Since September 2026. Set only by `billing-usage-alerts` for usage plans with a `blockDurationMs`; its presence marks a pause that expires on its own. |