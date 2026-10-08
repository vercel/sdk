# UserEventPayload66ProjectIds

Specific project IDs or all projects on the team (`['*']`).

## Example Usage

```typescript
import { UserEventPayload66ProjectIds } from "@vercel/sdk/models/payloadscopes.js";

let value: UserEventPayload66ProjectIds = {
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
| `type`                                                                           | [models.UserEventPayload66BeforeType](../models/usereventpayload66beforetype.md) | :heavy_check_mark:                                                               | N/A                                                                              |