# FiftyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftyTwo } from "@vercel/sdk/models/usereventpayload22provider.js";

let value: FiftyTwo = {
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
| `accessGroup`                                                                      | [models.UserEventPayload52AccessGroup](../models/usereventpayload52accessgroup.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `directoryType`                                                                    | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `user`                                                                             | [models.UserEventPayload52User](../models/usereventpayload52user.md)               | :heavy_check_mark:                                                                 | N/A                                                                                |