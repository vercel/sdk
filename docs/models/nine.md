# Nine

The payload of the event, if requested.

## Example Usage

```typescript
import { Nine } from "@vercel/sdk/models/userevent.js";

let value: Nine = {
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
| `accessGroup`                                                                    | [models.UserEventPayload9AccessGroup](../models/usereventpayload9accessgroup.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `user`                                                                           | [models.PayloadUser](../models/payloaduser.md)                                   | :heavy_check_mark:                                                               | N/A                                                                              |
| `directoryType`                                                                  | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |