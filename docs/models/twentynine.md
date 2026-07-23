# TwentyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentyNine } from "@vercel/sdk/models/nineteen.js";

let value: TwentyNine = {
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
| `accessGroup`                                                                      | [models.UserEventPayload29AccessGroup](../models/usereventpayload29accessgroup.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `user`                                                                             | [models.PayloadUser](../models/payloaduser.md)                                     | :heavy_check_mark:                                                                 | N/A                                                                                |
| `directoryType`                                                                    | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |