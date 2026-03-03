# Eight

The payload of the event, if requested.

## Example Usage

```typescript
import { Eight } from "@vercel/sdk/models/userevent.js";

let value: Eight = {
  accessGroup: {
    id: "<id>",
  },
  user: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `accessGroup`                                                                    | [models.UserEventPayload8AccessGroup](../models/usereventpayload8accessgroup.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `user`                                                                           | [models.PayloadUser](../models/payloaduser.md)                                   | :heavy_check_mark:                                                               | N/A                                                                              |
| `directoryType`                                                                  | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |