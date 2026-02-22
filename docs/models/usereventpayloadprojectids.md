# UserEventPayloadProjectIds

## Example Usage

```typescript
import { UserEventPayloadProjectIds } from "@vercel/sdk/models/payloadprojectids.js";

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
| `type`                                                                 | [models.UserEventPayload236Type](../models/usereventpayload236type.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `required`                                                             | *boolean*                                                              | :heavy_check_mark:                                                     | N/A                                                                    |
| `items`                                                                | [models.PayloadItems](../models/payloaditems.md)                       | :heavy_check_mark:                                                     | N/A                                                                    |