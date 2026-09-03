# UserEventPayload18Budget

Spend budget on an AI Gateway API key, as surfaced in activity messages. Defined locally (rather than imported from `@api/pubsub-types`) because `@api/pubsub-types` already depends on `@api/events`; importing it here would create a circular dependency. Must stay structurally aligned with `APIKeyBudget` in `@api/pubsub-types/event-payloads/api-keys`.

## Example Usage

```typescript
import { UserEventPayload18Budget } from "@vercel/sdk/models/userevent.js";

let value: UserEventPayload18Budget = {
  limitAmount: 3101.76,
  refreshPeriod: "weekly",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `limitAmount`                                                                          | *number*                                                                               | :heavy_check_mark:                                                                     | Spend cap, in dollars.                                                                 |
| `refreshPeriod`                                                                        | [models.UserEventPayload18RefreshPeriod](../models/usereventpayload18refreshperiod.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `alertThresholds`                                                                      | *number*[]                                                                             | :heavy_minus_sign:                                                                     | N/A                                                                                    |