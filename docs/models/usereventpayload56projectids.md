# UserEventPayload56ProjectIds

Specific project IDs or all projects on the team (`['*']`).

## Example Usage

```typescript
import { UserEventPayload56ProjectIds } from "@vercel/sdk/models/thirtythree.js";

let value: UserEventPayload56ProjectIds = {
  type: "list",
  required: true,
  items: {
    type: "string",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `type`                                                                         | [models.UserEventPayload56AfterType](../models/usereventpayload56aftertype.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `required`                                                                     | *true*                                                                         | :heavy_check_mark:                                                             | N/A                                                                            |
| `items`                                                                        | [models.PayloadItems](../models/payloaditems.md)                               | :heavy_check_mark:                                                             | N/A                                                                            |