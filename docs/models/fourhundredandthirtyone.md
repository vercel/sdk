# FourHundredAndThirtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThirtyOne } from "@vercel/sdk/models/oldssoprotection2.js";

let value: FourHundredAndThirtyOne = {
  eventId: "<id>",
  occurredAt: 2560.68,
  sessionId: "<id>",
  sessionKind: "<value>",
  surface: "<value>",
  elevatedScopeCount: 8582.4,
  elevatedScopes: [
    "<value 1>",
    "<value 2>",
  ],
  githubScopeCount: 7477.16,
  githubScopes: [],
  mergedScopeCount: 9259.04,
  mergedScopes: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  planId: "<id>",
  requestedScopeCount: 7462.46,
  requestedScopes: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `eventId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `occurredAt`                                                                     | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `sessionId`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `sessionKind`                                                                    | *string*                                                                         | :heavy_check_mark:                                                               | Currently emitted session kinds: chat, investigation.                            |
| `surface`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | Currently emitted surfaces: dashboard, internal, slack, automation, github.      |
| `elevatedScopeCount`                                                             | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `elevatedScopes`                                                                 | *string*[]                                                                       | :heavy_check_mark:                                                               | Requested Vercel scopes that are not included in the baseline token.             |
| `githubScopeCount`                                                               | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `githubScopes`                                                                   | *string*[]                                                                       | :heavy_check_mark:                                                               | External GitHub scopes requested by the plan; these are not Vercel token scopes. |
| `mergedScopeCount`                                                               | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `mergedScopes`                                                                   | *string*[]                                                                       | :heavy_check_mark:                                                               | Baseline plus elevated Vercel scopes used when minting scoped tokens.            |
| `planId`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `requestedScopeCount`                                                            | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `requestedScopes`                                                                | *string*[]                                                                       | :heavy_check_mark:                                                               | Scopes requested by the model-authored plan.                                     |