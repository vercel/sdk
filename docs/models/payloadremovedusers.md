# PayloadRemovedUsers

## Example Usage

```typescript
import { PayloadRemovedUsers } from "@vercel/sdk/models/twohundredandsixteen.js";

let value: PayloadRemovedUsers = {
  confirmed: false,
  role: "VIEWER",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `confirmed`                                                            | *boolean*                                                              | :heavy_check_mark:                                                     | N/A                                                                    |
| `confirmedAt`                                                          | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `joinedFrom`                                                           | [models.PayloadJoinedFrom](../models/payloadjoinedfrom.md)             | :heavy_minus_sign:                                                     | N/A                                                                    |
| `role`                                                                 | [models.UserEventPayload239Role](../models/usereventpayload239role.md) | :heavy_check_mark:                                                     | N/A                                                                    |