# ThreeHundredAndTwentyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwentyNine } from "@vercel/sdk/models/ssoprotection2.js";

let value: ThreeHundredAndTwentyNine = {
  eventId: "<id>",
  sessionId: "<id>",
  sessionKind: "<value>",
  surface: "<value>",
  occurredAt: 1041.22,
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `eventId`                                                                   | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `sessionId`                                                                 | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `sessionKind`                                                               | *string*                                                                    | :heavy_check_mark:                                                          | Currently emitted session kinds: chat, investigation.                       |
| `surface`                                                                   | *string*                                                                    | :heavy_check_mark:                                                          | Currently emitted surfaces: dashboard, internal, slack, automation, github. |
| `occurredAt`                                                                | *number*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |