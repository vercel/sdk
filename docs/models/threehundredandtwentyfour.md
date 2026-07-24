# ThreeHundredAndTwentyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwentyFour } from "@vercel/sdk/models/twohundredandeightyfour.js";

let value: ThreeHundredAndTwentyFour = {
  eventId: "<id>",
  sessionId: "<id>",
  sessionKind: "<value>",
  surface: "<value>",
  occurredAt: 1859.92,
  planId: "<id>",
  requestedScopes: [],
  elevatedScopes: [
    "<value 1>",
  ],
  mergedScopes: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  githubScopes: [
    "<value 1>",
    "<value 2>",
  ],
  requestedScopeCount: 6119.06,
  elevatedScopeCount: 4150.68,
  mergedScopeCount: 2715.61,
  githubScopeCount: 7948.56,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `eventId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `sessionId`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `sessionKind`                                                                    | *string*                                                                         | :heavy_check_mark:                                                               | Currently emitted session kinds: chat, investigation.                            |
| `surface`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | Currently emitted surfaces: dashboard, internal, slack, automation, github.      |
| `occurredAt`                                                                     | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `planId`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `requestedScopes`                                                                | *string*[]                                                                       | :heavy_check_mark:                                                               | Scopes requested by the model-authored plan.                                     |
| `elevatedScopes`                                                                 | *string*[]                                                                       | :heavy_check_mark:                                                               | Requested Vercel scopes that are not included in the baseline token.             |
| `mergedScopes`                                                                   | *string*[]                                                                       | :heavy_check_mark:                                                               | Baseline plus elevated Vercel scopes used when minting scoped tokens.            |
| `githubScopes`                                                                   | *string*[]                                                                       | :heavy_check_mark:                                                               | External GitHub scopes requested by the plan; these are not Vercel token scopes. |
| `requestedScopeCount`                                                            | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `elevatedScopeCount`                                                             | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `mergedScopeCount`                                                               | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `githubScopeCount`                                                               | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |