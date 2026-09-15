# RemovedUsers

## Example Usage

```typescript
import { RemovedUsers } from "@vercel/sdk/models/usereventpayloadnext.js";

let value: RemovedUsers = {
  role: "BILLING",
  confirmed: true,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `role`                                                                       | [models.UserEventPayload227Role](../models/usereventpayload227role.md)       | :heavy_check_mark:                                                           | N/A                                                                          |
| `confirmed`                                                                  | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |
| `confirmedAt`                                                                | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `joinedFrom`                                                                 | [models.UserEventPayloadJoinedFrom](../models/usereventpayloadjoinedfrom.md) | :heavy_minus_sign:                                                           | N/A                                                                          |