# FourHundredAndTwentyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwentyEight } from "@vercel/sdk/models/ssoprotectioncve55182migrationappliedfrom.js";

let value: FourHundredAndTwentyEight = {
  eventId: "<id>",
  occurredAt: 8821.49,
  sessionId: "<id>",
  sessionKind: "<value>",
  surface: "<value>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `eventId`                                                                   | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `occurredAt`                                                                | *number*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `sessionId`                                                                 | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `sessionKind`                                                               | *string*                                                                    | :heavy_check_mark:                                                          | Currently emitted session kinds: chat, investigation.                       |
| `surface`                                                                   | *string*                                                                    | :heavy_check_mark:                                                          | Currently emitted surfaces: dashboard, internal, slack, automation, github. |