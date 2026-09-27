# ThreeHundredAndSeventyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeventyFive } from "@vercel/sdk/models/usereventpayload353geolocationnames.js";

let value: ThreeHundredAndSeventyFive = {
  eventId: "<id>",
  occurredAt: 5899.86,
  sessionId: "<id>",
  sessionKind: "<value>",
  surface: "<value>",
  elevatedScopeCount: 5184.43,
  elevatedScopes: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  githubScopeCount: 1617.07,
  githubScopes: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  mergedScopeCount: 9233.98,
  mergedScopes: [
    "<value 1>",
    "<value 2>",
  ],
  planId: "<id>",
  requestedScopeCount: 7356.93,
  requestedScopes: [],
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