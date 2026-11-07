# FiftyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftyFive } from "@vercel/sdk/models/rule.js";

let value: FiftyFive = {
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
| `accessGroup`                                                                      | [models.UserEventPayload55AccessGroup](../models/usereventpayload55accessgroup.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `directoryType`                                                                    | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `user`                                                                             | [models.UserEventPayload55User](../models/usereventpayload55user.md)               | :heavy_check_mark:                                                                 | N/A                                                                                |