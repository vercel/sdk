# EightyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyEight } from "@vercel/sdk/models/eightythree.js";

let value: EightyEight = {
  expiresAt: 9902.77,
  originSessionId: "<id>",
  sessionId: "<id>",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `expiresAt`                      | *number*                         | :heavy_check_mark:               | UNIX timestamp in milliseconds.  |
| `name`                           | *string*                         | :heavy_minus_sign:               | N/A                              |
| `originSessionId`                | *string*                         | :heavy_check_mark:               | The session it was started from. |
| `sessionId`                      | *string*                         | :heavy_check_mark:               | N/A                              |