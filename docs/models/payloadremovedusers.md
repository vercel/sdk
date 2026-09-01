# PayloadRemovedUsers

## Example Usage

```typescript
import { PayloadRemovedUsers } from "@vercel/sdk/models/siftroute.js";

let value: PayloadRemovedUsers = {
  role: "VIEWER_FOR_PLUS",
  confirmed: false,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `role`                                                                 | [models.UserEventPayload221Role](../models/usereventpayload221role.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `confirmed`                                                            | *boolean*                                                              | :heavy_check_mark:                                                     | N/A                                                                    |
| `confirmedAt`                                                          | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `joinedFrom`                                                           | [models.PayloadJoinedFrom](../models/payloadjoinedfrom.md)             | :heavy_minus_sign:                                                     | N/A                                                                    |