# PayloadPreviousBudget

`api-key` defaults may cover only some key spend attributions.

## Example Usage

```typescript
import { PayloadPreviousBudget } from "@vercel/sdk/models/usereventpayload27provider.js";

let value: PayloadPreviousBudget = {
  limitAmount: 4633.42,
  refreshPeriod: "monthly",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `alertThresholds`                                                                                                  | *number*[]                                                                                                         | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `expiresAt`                                                                                                        | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | When the budget lapses to the scope's default, in ms since the epoch.                                              |
| `limitAmount`                                                                                                      | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | Spend cap, in dollars.                                                                                             |
| `refreshPeriod`                                                                                                    | [models.UserEventPayload36PreviousBudgetRefreshPeriod](../models/usereventpayload36previousbudgetrefreshperiod.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `appliesTo`                                                                                                        | [models.UserEventPayloadAppliesTo](../models/usereventpayloadappliesto.md)[]                                       | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |