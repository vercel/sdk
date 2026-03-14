# PayloadProjectIds

## Example Usage

```typescript
import { PayloadProjectIds } from "@vercel/sdk/models/payloadprojectids.js";

let value: PayloadProjectIds = {
  type: "list",
  required: true,
  items: {
    type: "string",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `type`                                                               | [models.UserEventPayload26Type](../models/usereventpayload26type.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `required`                                                           | *true*                                                               | :heavy_check_mark:                                                   | N/A                                                                  |
| `items`                                                              | [models.Items](../models/items.md)                                   | :heavy_check_mark:                                                   | N/A                                                                  |