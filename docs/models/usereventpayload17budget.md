# UserEventPayload17Budget

Spend budget on an AI Gateway API key, as surfaced in activity messages. Defined locally (rather than imported from `@api/pubsub-types`) because `@api/pubsub-types` already depends on `@api/events`; importing it here would create a circular dependency. Must stay structurally aligned with `APIKeyBudget` in `@api/pubsub-types/event-payloads/api-keys`.

## Example Usage

```typescript
import { UserEventPayload17Budget } from "@vercel/sdk/models/usereventpayloadrefreshperiod.js";

let value: UserEventPayload17Budget = {
  limitAmount: 287.93,
  refreshPeriod: "daily",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `limitAmount`                                                                          | *number*                                                                               | :heavy_check_mark:                                                                     | Spend cap, in dollars.                                                                 |
| `refreshPeriod`                                                                        | [models.UserEventPayload17RefreshPeriod](../models/usereventpayload17refreshperiod.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |