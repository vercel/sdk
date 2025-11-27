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

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `type`                                                                           | [models.UserEventPayload170AfterType](../models/usereventpayload170aftertype.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `required`                                                                       | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |
| `items`                                                                          | [models.UserEventPayloadItems](../models/usereventpayloaditems.md)               | :heavy_check_mark:                                                               | N/A                                                                              |