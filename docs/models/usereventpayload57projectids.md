# UserEventPayload57ProjectIds

Specific project IDs or all projects on the team (`['*']`).

## Example Usage

```typescript
import { UserEventPayload57ProjectIds } from "@vercel/sdk/models/fiftythree.js";

let value: UserEventPayload57ProjectIds = {
  items: {
    type: "string",
  },
  required: true,
  type: "list",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `items`                                                                          | [models.PayloadItems](../models/payloaditems.md)                                 | :heavy_check_mark:                                                               | N/A                                                                              |
| `required`                                                                       | *true*                                                                           | :heavy_check_mark:                                                               | N/A                                                                              |
| `type`                                                                           | [models.UserEventPayload57BeforeType](../models/usereventpayload57beforetype.md) | :heavy_check_mark:                                                               | N/A                                                                              |