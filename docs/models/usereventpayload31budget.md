# UserEventPayload31Budget

Spend budget on an AI Gateway API key, as surfaced in activity messages. Defined locally (rather than imported from `@api/pubsub-types`) because `@api/pubsub-types` already depends on `@api/events`; importing it here would create a circular dependency. Must stay structurally aligned with `APIKeyBudget` in `@api/pubsub-types/event-payloads/api-keys`.

## Example Usage

```typescript
import { UserEventPayload31Budget } from "@vercel/sdk/models/twentyone.js";

let value: UserEventPayload31Budget = {
  limitAmount: 3902.42,
  refreshPeriod: "none",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `alertThresholds`                                                                      | *number*[]                                                                             | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `limitAmount`                                                                          | *number*                                                                               | :heavy_check_mark:                                                                     | Spend cap, in dollars.                                                                 |
| `refreshPeriod`                                                                        | [models.UserEventPayload31RefreshPeriod](../models/usereventpayload31refreshperiod.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |