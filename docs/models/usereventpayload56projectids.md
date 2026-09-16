# UserEventPayload56ProjectIds

Specific project IDs or all projects on the team (`['*']`).

## Example Usage

```typescript
import { UserEventPayload56ProjectIds } from "@vercel/sdk/models/twentynine.js";

let value: UserEventPayload56ProjectIds = {
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
| `type`                                                                           | [models.UserEventPayload56BeforeType](../models/usereventpayload56beforetype.md) | :heavy_check_mark:                                                               | N/A                                                                              |