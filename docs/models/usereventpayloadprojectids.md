# UserEventPayloadProjectIds

## Example Usage

```typescript
import { UserEventPayloadProjectIds } from "@vercel/sdk/models/userevent.js";

let value: UserEventPayloadProjectIds = {
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
| `type`                                                                 | [models.UserEventPayload170Type](../models/usereventpayload170type.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `required`                                                             | *boolean*                                                              | :heavy_check_mark:                                                     | N/A                                                                    |
| `items`                                                                | [models.PayloadItems](../models/payloaditems.md)                       | :heavy_check_mark:                                                     | N/A                                                                    |