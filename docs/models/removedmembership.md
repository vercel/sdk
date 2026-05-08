# RemovedMembership

## Example Usage

```typescript
import { RemovedMembership } from "@vercel/sdk/models/payloadgituserid.js";

let value: RemovedMembership = {
  role: "ADMIN",
  uid: "<id>",
  createdAt: 9038.16,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `role`                                                                 | [models.UserEventPayload208Role](../models/usereventpayload208role.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `uid`                                                                  | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `createdAt`                                                            | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `username`                                                             | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |