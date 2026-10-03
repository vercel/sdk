# ThreeHundredAndSeventyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeventyNine } from "@vercel/sdk/models/threehundredandsixty.js";

let value: ThreeHundredAndSeventyNine = {
  eventId: "<id>",
  occurredAt: 6297.61,
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