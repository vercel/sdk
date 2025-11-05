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

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `type`                                                                   | [models.UserEventPayload162Type](../models/usereventpayload162type.md)   | :heavy_check_mark:                                                       | N/A                                                                      |
| `required`                                                               | *boolean*                                                                | :heavy_check_mark:                                                       | N/A                                                                      |
| `items`                                                                  | [models.UserEventPayload162Items](../models/usereventpayload162items.md) | :heavy_check_mark:                                                       | N/A                                                                      |