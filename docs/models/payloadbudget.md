# PayloadBudget

Spend budget on an AI Gateway API key, as surfaced in activity messages. Defined locally (rather than imported from `@api/pubsub-types`) because `@api/pubsub-types` already depends on `@api/events`; importing it here would create a circular dependency. Must stay structurally aligned with `APIKeyBudget` in `@api/pubsub-types/event-payloads/api-keys`.

## Example Usage

```typescript
import { PayloadBudget } from "@vercel/sdk/models/action.js";

let value: PayloadBudget = {
  limitAmount: 3089.34,
  refreshPeriod: "monthly",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `limitAmount`                                                    | *number*                                                         | :heavy_check_mark:                                               | Spend cap, in dollars.                                           |
| `refreshPeriod`                                                  | [models.PayloadRefreshPeriod](../models/payloadrefreshperiod.md) | :heavy_check_mark:                                               | N/A                                                              |