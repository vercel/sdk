# UserEventPayloadProjectIds

Specific project IDs or all projects on the team (`['*']`).

## Example Usage

```typescript
import { UserEventPayloadProjectIds } from "@vercel/sdk/models/payloadscopetype.js";

let value: UserEventPayloadProjectIds = {
  type: "list",
  required: true,
  items: {
    type: "string",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `type`                                                               | [models.UserEventPayload53Type](../models/usereventpayload53type.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `required`                                                           | *true*                                                               | :heavy_check_mark:                                                   | N/A                                                                  |
| `items`                                                              | [models.UserEventPayloadItems](../models/usereventpayloaditems.md)   | :heavy_check_mark:                                                   | N/A                                                                  |