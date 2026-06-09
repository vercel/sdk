# Budget

Spend budget on an AI Gateway API key, as surfaced in activity messages. Defined locally (rather than imported from `@api/pubsub-types`) because `@api/pubsub-types` already depends on `@api/events`; importing it here would create a circular dependency. Must stay structurally aligned with `APIKeyBudget` in `@api/pubsub-types/event-payloads/api-keys`.

## Example Usage

```typescript
import { Budget } from "@vercel/sdk/models/userevent.js";

let value: Budget = {
  limitAmount: 268.4,
  refreshPeriod: "weekly",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `limitAmount`                                      | *number*                                           | :heavy_check_mark:                                 | Spend cap, in dollars.                             |
| `refreshPeriod`                                    | [models.RefreshPeriod](../models/refreshperiod.md) | :heavy_check_mark:                                 | N/A                                                |