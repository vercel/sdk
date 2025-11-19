# OneHundredAndThirteen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirteen } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndThirteen = {
  id: "<id>",
  type: "redis",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `id`                                                             | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `name`                                                           | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `computeUnitsMax`                                                | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `computeUnitsMin`                                                | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `suspendTimeoutSeconds`                                          | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `type`                                                           | [models.UserEventPayloadType](../models/usereventpayloadtype.md) | :heavy_check_mark:                                               | N/A                                                              |