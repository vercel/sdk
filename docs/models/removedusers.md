# RemovedUsers

## Example Usage

```typescript
import { RemovedUsers } from "@vercel/sdk/models/userevent.js";

let value: RemovedUsers = {
  role: "OWNER",
  confirmed: true,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `role`                                                               | [models.UserEventPayload77Role](../models/usereventpayload77role.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `confirmed`                                                          | *boolean*                                                            | :heavy_check_mark:                                                   | N/A                                                                  |
| `confirmedAt`                                                        | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `joinedFrom`                                                         | [models.PayloadJoinedFrom](../models/payloadjoinedfrom.md)           | :heavy_minus_sign:                                                   | N/A                                                                  |