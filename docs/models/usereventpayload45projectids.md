# UserEventPayload45ProjectIds

Specific project IDs or all projects on the team (`['*']`).

## Example Usage

```typescript
import { UserEventPayload45ProjectIds } from "@vercel/sdk/models/userevent.js";

let value: UserEventPayload45ProjectIds = {
  type: "list",
  required: true,
  items: {
    type: "string",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `type`                                                                         | [models.UserEventPayload45AfterType](../models/usereventpayload45aftertype.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `required`                                                                     | *true*                                                                         | :heavy_check_mark:                                                             | N/A                                                                            |
| `items`                                                                        | [models.PayloadItems](../models/payloaditems.md)                               | :heavy_check_mark:                                                             | N/A                                                                            |