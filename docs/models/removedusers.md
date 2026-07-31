# RemovedUsers

## Example Usage

```typescript
import { RemovedUsers } from "@vercel/sdk/models/querytype.js";

let value: RemovedUsers = {
  role: "BILLING",
  confirmed: true,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `role`                                                                 | [models.UserEventPayload205Role](../models/usereventpayload205role.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `confirmed`                                                            | *boolean*                                                              | :heavy_check_mark:                                                     | N/A                                                                    |
| `confirmedAt`                                                          | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `joinedFrom`                                                           | [models.PayloadJoinedFrom](../models/payloadjoinedfrom.md)             | :heavy_minus_sign:                                                     | N/A                                                                    |