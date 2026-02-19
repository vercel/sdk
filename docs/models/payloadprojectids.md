# PayloadProjectIds

## Example Usage

```typescript
import { PayloadProjectIds } from "@vercel/sdk/models/userevent.js";

let value: PayloadProjectIds = {
  type: "list",
  required: true,
  items: {
    type: "string",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `type`                                                                 | [models.UserEventPayload235Type](../models/usereventpayload235type.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `required`                                                             | *boolean*                                                              | :heavy_check_mark:                                                     | N/A                                                                    |
| `items`                                                                | [models.Items](../models/items.md)                                     | :heavy_check_mark:                                                     | N/A                                                                    |