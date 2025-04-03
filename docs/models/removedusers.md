# RemovedUsers

## Example Usage

```typescript
import { RemovedUsers } from "@vercel/sdk/models/userevent.js";

let value: RemovedUsers = {
  role: "VIEWER",
  confirmed: false,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `role`                                                               | [models.UserEventPayload73Role](../models/usereventpayload73role.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `confirmed`                                                          | *boolean*                                                            | :heavy_check_mark:                                                   | N/A                                                                  |
| `confirmedAt`                                                        | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `joinedFrom`                                                         | [models.PayloadJoinedFrom](../models/payloadjoinedfrom.md)           | :heavy_minus_sign:                                                   | N/A                                                                  |