# SixtyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtyTwo } from "@vercel/sdk/models/thirteen.js";

let value: SixtyTwo = {
  accessGroup: {
    id: "<id>",
  },
  user: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `accessGroup`                                                                      | [models.UserEventPayload62AccessGroup](../models/usereventpayload62accessgroup.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `directoryType`                                                                    | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `user`                                                                             | [models.UserEventPayload62User](../models/usereventpayload62user.md)               | :heavy_check_mark:                                                                 | N/A                                                                                |