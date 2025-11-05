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
| `type`                                                                 | [models.UserEventPayload161Type](../models/usereventpayload161type.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `required`                                                             | *boolean*                                                              | :heavy_check_mark:                                                     | N/A                                                                    |
| `items`                                                                | [models.UserEventPayloadItems](../models/usereventpayloaditems.md)     | :heavy_check_mark:                                                     | N/A                                                                    |