# UserEventPayload32Budget

Spend budget on an AI Gateway API key, scope, or budget default, as surfaced in activity messages. Defined locally (rather than imported from `@api/pubsub-types`) because `@api/pubsub-types` already depends on `@api/events`; importing it here would create a circular dependency. Must stay structurally aligned with `APIKeyBudget` in `@api/pubsub-types/event-payloads/api-keys`.

## Example Usage

```typescript
import { UserEventPayload32Budget } from "@vercel/sdk/models/userevent.js";

let value: UserEventPayload32Budget = {
  limitAmount: 7899.76,
  refreshPeriod: "none",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `alertThresholds`                                                                      | *number*[]                                                                             | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `limitAmount`                                                                          | *number*                                                                               | :heavy_check_mark:                                                                     | Spend cap, in dollars.                                                                 |
| `refreshPeriod`                                                                        | [models.UserEventPayload32RefreshPeriod](../models/usereventpayload32refreshperiod.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |