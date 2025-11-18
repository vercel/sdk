# ProjectIds

## Example Usage

```typescript
import { ProjectIds } from "@vercel/sdk/models/userevent.js";

let value: ProjectIds = {
  type: "list",
  required: false,
  items: {
    type: "string",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `type`                                                                 | [models.UserEventPayload164Type](../models/usereventpayload164type.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `required`                                                             | *boolean*                                                              | :heavy_check_mark:                                                     | N/A                                                                    |
| `items`                                                                | [models.Items](../models/items.md)                                     | :heavy_check_mark:                                                     | N/A                                                                    |