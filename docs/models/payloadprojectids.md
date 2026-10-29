# PayloadProjectIds

Specific project IDs or all projects on the team (`['*']`).

## Example Usage

```typescript
import { PayloadProjectIds } from "@vercel/sdk/models/usereventpayload22provider.js";

let value: PayloadProjectIds = {
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
| `items`                                                              | [models.Items](../models/items.md)                                   | :heavy_check_mark:                                                   | N/A                                                                  |
| `required`                                                           | *true*                                                               | :heavy_check_mark:                                                   | N/A                                                                  |
| `type`                                                               | [models.UserEventPayload70Type](../models/usereventpayload70type.md) | :heavy_check_mark:                                                   | N/A                                                                  |