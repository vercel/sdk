# UserEventPayload70ProjectIds

Specific project IDs or all projects on the team (`['*']`).

## Example Usage

```typescript
import { UserEventPayload70ProjectIds } from "@vercel/sdk/models/usereventpayload26apikey.js";

let value: UserEventPayload70ProjectIds = {
  items: {
    type: "string",
  },
  required: true,
  type: "list",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `items`                                                                          | [models.PayloadItems](../models/payloaditems.md)                                 | :heavy_check_mark:                                                               | N/A                                                                              |
| `required`                                                                       | *true*                                                                           | :heavy_check_mark:                                                               | N/A                                                                              |
| `type`                                                                           | [models.UserEventPayload70BeforeType](../models/usereventpayload70beforetype.md) | :heavy_check_mark:                                                               | N/A                                                                              |