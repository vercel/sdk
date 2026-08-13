# UserEventPayloadRemovedUsers

## Example Usage

```typescript
import { UserEventPayloadRemovedUsers } from "@vercel/sdk/models/payloadfactors.js";

let value: UserEventPayloadRemovedUsers = {
  role: "SECURITY",
  confirmed: false,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `role`                                                                 | [models.UserEventPayload347Role](../models/usereventpayload347role.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `confirmed`                                                            | *boolean*                                                              | :heavy_check_mark:                                                     | N/A                                                                    |
| `confirmedAt`                                                          | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |