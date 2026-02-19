# PayloadRemovedUsers

## Example Usage

```typescript
import { PayloadRemovedUsers } from "@vercel/sdk/models/userevent.js";

let value: PayloadRemovedUsers = {
  role: "CONTRIBUTOR",
  confirmed: false,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `role`                                                                 | [models.UserEventPayload176Role](../models/usereventpayload176role.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `confirmed`                                                            | *boolean*                                                              | :heavy_check_mark:                                                     | N/A                                                                    |
| `confirmedAt`                                                          | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |