# UserEventPayload53ProjectIds

Specific project IDs or all projects on the team (`['*']`).

## Example Usage

```typescript
import { UserEventPayload53ProjectIds } from "@vercel/sdk/models/twentysix.js";

let value: UserEventPayload53ProjectIds = {
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
| `type`                                                                         | [models.UserEventPayload53AfterType](../models/usereventpayload53aftertype.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `required`                                                                     | *true*                                                                         | :heavy_check_mark:                                                             | N/A                                                                            |
| `items`                                                                        | [models.PayloadItems](../models/payloaditems.md)                               | :heavy_check_mark:                                                             | N/A                                                                            |