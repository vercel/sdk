# PayloadPreviousBudget

Spend budget on an AI Gateway API key, scope, or budget default, as surfaced in activity messages. Defined locally (rather than imported from `@api/pubsub-types`) because `@api/pubsub-types` already depends on `@api/events`; importing it here would create a circular dependency. Must stay structurally aligned with `APIKeyBudget` in `@api/pubsub-types/event-payloads/api-keys`.

## Example Usage

```typescript
import { PayloadPreviousBudget } from "@vercel/sdk/models/userevent.js";

let value: PayloadPreviousBudget = {
  limitAmount: 4633.42,
  refreshPeriod: "monthly",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `alertThresholds`                                                                                                  | *number*[]                                                                                                         | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `limitAmount`                                                                                                      | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | Spend cap, in dollars.                                                                                             |
| `refreshPeriod`                                                                                                    | [models.UserEventPayload35PreviousBudgetRefreshPeriod](../models/usereventpayload35previousbudgetrefreshperiod.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |