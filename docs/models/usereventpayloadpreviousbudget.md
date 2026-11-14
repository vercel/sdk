# UserEventPayloadPreviousBudget

Spend budget on an AI Gateway API key, scope, or budget default, as surfaced in activity messages. Defined locally (rather than imported from `@api/pubsub-types`) because `@api/pubsub-types` already depends on `@api/events`; importing it here would create a circular dependency. Must stay structurally aligned with `APIKeyBudget` in `@api/pubsub-types/event-payloads/api-keys`.

## Example Usage

```typescript
import { UserEventPayloadPreviousBudget } from "@vercel/sdk/models/usereventvia4type.js";

let value: UserEventPayloadPreviousBudget = {
  limitAmount: 394.23,
  refreshPeriod: "weekly",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `alertThresholds`                                                                                                  | *number*[]                                                                                                         | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `limitAmount`                                                                                                      | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | Spend cap, in dollars.                                                                                             |
| `refreshPeriod`                                                                                                    | [models.UserEventPayload36PreviousBudgetRefreshPeriod](../models/usereventpayload36previousbudgetrefreshperiod.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |