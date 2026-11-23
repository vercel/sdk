# SixtyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtyFour } from "@vercel/sdk/models/twentythree.js";

let value: SixtyFour = {
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
| `accessGroup`                                                                      | [models.UserEventPayload64AccessGroup](../models/usereventpayload64accessgroup.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `directoryType`                                                                    | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `user`                                                                             | [models.UserEventPayload64User](../models/usereventpayload64user.md)               | :heavy_check_mark:                                                                 | N/A                                                                                |