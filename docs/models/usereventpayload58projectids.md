# UserEventPayload58ProjectIds

Specific project IDs or all projects on the team (`['*']`).

## Example Usage

```typescript
import { UserEventPayload58ProjectIds } from "@vercel/sdk/models/fiftytwo.js";

let value: UserEventPayload58ProjectIds = {
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
| `type`                                                                           | [models.UserEventPayload58BeforeType](../models/usereventpayload58beforetype.md) | :heavy_check_mark:                                                               | N/A                                                                              |