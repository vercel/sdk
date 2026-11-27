# SixtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtyFive } from "@vercel/sdk/models/usereventpayload27provider.js";

let value: SixtyFive = {
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
| `accessGroup`                                                                      | [models.UserEventPayload65AccessGroup](../models/usereventpayload65accessgroup.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `directoryType`                                                                    | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `user`                                                                             | [models.UserEventPayload65User](../models/usereventpayload65user.md)               | :heavy_check_mark:                                                                 | N/A                                                                                |