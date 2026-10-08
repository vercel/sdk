# RemovedUsers

## Example Usage

```typescript
import { RemovedUsers } from "@vercel/sdk/models/siftroute.js";

let value: RemovedUsers = {
  confirmed: true,
  role: "MEMBER",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `confirmed`                                                                  | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |
| `confirmedAt`                                                                | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `joinedFrom`                                                                 | [models.UserEventPayloadJoinedFrom](../models/usereventpayloadjoinedfrom.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `role`                                                                       | [models.UserEventPayload250Role](../models/usereventpayload250role.md)       | :heavy_check_mark:                                                           | N/A                                                                          |