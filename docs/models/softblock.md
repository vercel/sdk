# SoftBlock

When the User account has been "soft blocked", this property will contain the date when the restriction was enacted, and the identifier for why.

## Example Usage

```typescript
import { SoftBlock } from "@vercel/sdk/models/authuser.js";

let value: SoftBlock = {
  blockedAt: 8954.99,
  reason: "ENTERPRISE_UNPAID_INVOICE",
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `blockedAt`                                                                                                                                            | *number*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `reason`                                                                                                                                               | [models.Reason](../models/reason.md)                                                                                                                   | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `blockedDueToOverageType`                                                                                                                              | [models.BlockedDueToOverageType](../models/blockedduetooveragetype.md)                                                                                 | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |
| `unpauseAt`                                                                                                                                            | *number*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | Since September 2026. Set only by `billing-usage-alerts` for usage plans with a `blockDurationMs`; its presence marks a pause that expires on its own. |