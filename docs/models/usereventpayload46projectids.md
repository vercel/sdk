# UserEventPayload46ProjectIds

Specific project IDs or all projects on the team (`['*']`).

## Example Usage

```typescript
import { UserEventPayload46ProjectIds } from "@vercel/sdk/models/nineteen.js";

let value: UserEventPayload46ProjectIds = {
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
| `type`                                                                         | [models.UserEventPayload46AfterType](../models/usereventpayload46aftertype.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `required`                                                                     | *true*                                                                         | :heavy_check_mark:                                                             | N/A                                                                            |
| `items`                                                                        | [models.PayloadItems](../models/payloaditems.md)                               | :heavy_check_mark:                                                             | N/A                                                                            |