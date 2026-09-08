# ThirtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtyEight } from "@vercel/sdk/models/thirtyone.js";

let value: ThirtyEight = {
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
| `accessGroup`                                                                      | [models.UserEventPayload38AccessGroup](../models/usereventpayload38accessgroup.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `user`                                                                             | [models.PayloadUser](../models/payloaduser.md)                                     | :heavy_check_mark:                                                                 | N/A                                                                                |
| `directoryType`                                                                    | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |