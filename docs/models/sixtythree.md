# SixtyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtyThree } from "@vercel/sdk/models/twenty.js";

let value: SixtyThree = {
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
| `accessGroup`                                                                      | [models.UserEventPayload63AccessGroup](../models/usereventpayload63accessgroup.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `directoryType`                                                                    | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `user`                                                                             | [models.UserEventPayload63User](../models/usereventpayload63user.md)               | :heavy_check_mark:                                                                 | N/A                                                                                |