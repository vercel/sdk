# UserEventPayloadBudget

Spend budget on an AI Gateway API key, as surfaced in activity messages. Defined locally (rather than imported from `@api/pubsub-types`) because `@api/pubsub-types` already depends on `@api/events`; importing it here would create a circular dependency. Must stay structurally aligned with `APIKeyBudget` in `@api/pubsub-types/event-payloads/api-keys`.

## Example Usage

```typescript
import { UserEventPayloadBudget } from "@vercel/sdk/models/userevent.js";

let value: UserEventPayloadBudget = {
  limitAmount: 5322.24,
  refreshPeriod: "daily",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `limitAmount`                                                                      | *number*                                                                           | :heavy_check_mark:                                                                 | Spend cap, in dollars.                                                             |
| `refreshPeriod`                                                                    | [models.UserEventPayloadRefreshPeriod](../models/usereventpayloadrefreshperiod.md) | :heavy_check_mark:                                                                 | N/A                                                                                |