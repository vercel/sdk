# PayloadProjectIds

Specific project IDs or all projects on the team (`['*']`).

## Example Usage

```typescript
import { PayloadProjectIds } from "@vercel/sdk/models/eighteen.js";

let value: PayloadProjectIds = {
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
| `type`                                                               | [models.UserEventPayload54Type](../models/usereventpayload54type.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `required`                                                           | *true*                                                               | :heavy_check_mark:                                                   | N/A                                                                  |
| `items`                                                              | [models.Items](../models/items.md)                                   | :heavy_check_mark:                                                   | N/A                                                                  |