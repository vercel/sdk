# UserEventPayloadProjectIds

Specific project IDs or all projects on the team (`['*']`).

## Example Usage

```typescript
import { UserEventPayloadProjectIds } from "@vercel/sdk/models/fiftytwo.js";

let value: UserEventPayloadProjectIds = {
  items: {
    type: "string",
  },
  required: true,
  type: "list",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [models.UserEventPayloadItems](../models/usereventpayloaditems.md)   | :heavy_check_mark:                                                   | N/A                                                                  |
| `required`                                                           | *true*                                                               | :heavy_check_mark:                                                   | N/A                                                                  |
| `type`                                                               | [models.UserEventPayload58Type](../models/usereventpayload58type.md) | :heavy_check_mark:                                                   | N/A                                                                  |