# UserEventPayloadRemovedUsers

## Example Usage

```typescript
import { UserEventPayloadRemovedUsers } from "@vercel/sdk/models/fourhundredandforty.js";

let value: UserEventPayloadRemovedUsers = {
  confirmed: false,
  role: "VIEWER",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `confirmed`                                                            | *boolean*                                                              | :heavy_check_mark:                                                     | N/A                                                                    |
| `confirmedAt`                                                          | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `role`                                                                 | [models.UserEventPayload445Role](../models/usereventpayload445role.md) | :heavy_check_mark:                                                     | N/A                                                                    |