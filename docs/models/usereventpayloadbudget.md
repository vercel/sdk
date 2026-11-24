# UserEventPayloadBudget

`api-key` defaults may cover only some key spend attributions.

## Example Usage

```typescript
import { UserEventPayloadBudget } from "@vercel/sdk/models/usereventpayload25provider.js";

let value: UserEventPayloadBudget = {
  limitAmount: 5322.24,
  refreshPeriod: "daily",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `alertThresholds`                                                                      | *number*[]                                                                             | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `expiresAt`                                                                            | *number*                                                                               | :heavy_minus_sign:                                                                     | When the budget lapses to the scope's default, in ms since the epoch.                  |
| `limitAmount`                                                                          | *number*                                                                               | :heavy_check_mark:                                                                     | Spend cap, in dollars.                                                                 |
| `refreshPeriod`                                                                        | [models.UserEventPayload36RefreshPeriod](../models/usereventpayload36refreshperiod.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `appliesTo`                                                                            | [models.PayloadAppliesTo](../models/payloadappliesto.md)[]                             | :heavy_minus_sign:                                                                     | N/A                                                                                    |