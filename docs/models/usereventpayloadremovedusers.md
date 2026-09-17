# UserEventPayloadRemovedUsers

## Example Usage

```typescript
import { UserEventPayloadRemovedUsers } from "@vercel/sdk/models/payloadmostspecificsubdivision.js";

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
| `role`                                                                 | [models.UserEventPayload366Role](../models/usereventpayload366role.md) | :heavy_check_mark:                                                     | N/A                                                                    |