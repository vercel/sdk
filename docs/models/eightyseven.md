# EightySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { EightySeven } from "@vercel/sdk/models/usereventpayload82resourcestype.js";

let value: EightySeven = {
  expiresAt: 434.73,
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